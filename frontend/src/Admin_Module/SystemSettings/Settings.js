import React, { useState, useEffect } from "react";
import axios from "axios";

function SystemSettings() {
  const [notificationPreferences, setNotificationPreferences] = useState({
    emailNotifications: false,
    smsNotifications: false,
  });
  const [systemSettings, setSystemSettings] = useState({
    theme: "",
    language: "",
  });
  const [settings, setSettings] = useState({});

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await axios.get("/admin/settings");
        setSettings(response.data);
        setNotificationPreferences(response.data.notificationPreferences);
        setSystemSettings(response.data.systemSettings);
      } catch (error) {
        console.error(error);
      }
    };
    fetchSettings();
  }, []);

  const handleUpdateSettings = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put("/admin/settings", {
        notificationPreferences,
        systemSettings,
      });
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <header className="bg-gray-800 text-white p-4">
        <h1 className="text-2xl font-bold">System Settings</h1>
      </header>
      <main className="flex-1 p-4">
        <form onSubmit={handleUpdateSettings} className="w-full max-w-lg mt-4">
          <h2 className="text-xl font-bold mb-4">Notification Preferences</h2>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Email Notifications
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="checkbox"
                checked={notificationPreferences.emailNotifications}
                onChange={(e) =>
                  setNotificationPreferences({
                    ...notificationPreferences,
                    emailNotifications: e.target.checked,
                  })
                }
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                SMS Notifications
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="checkbox"
                checked={notificationPreferences.smsNotifications}
                onChange={(e) =>
                  setNotificationPreferences({
                    ...notificationPreferences,
                    smsNotifications: e.target.checked,
                  })
                }
              />
            </div>
          </div>
          <h2 className="text-xl font-bold mb-4">System Settings</h2>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Theme
              </label>
              <select
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={systemSettings.theme}
                onChange={(e) =>
                  setSystemSettings({
                    ...systemSettings,
                    theme: e.target.value,
                  })
                }
              >
                <option value="">Select Theme</option>
                <option value="light">Light</option>
                <option value="dark">Dark</option>
              </select>
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                Language
              </label>
              <select
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                value={systemSettings.language}
                onChange={(e) =>
                  setSystemSettings({
                    ...systemSettings,
                    language: e.target.value,
                  })
                }
              >
                <option value="">Select Language</option>
                <option value="en">English</option>
                <option value="fr">French</option>
              </select>
            </div>
          </div>
          <div className="flex justify-end">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              type="submit"
            >
              Update Settings
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

export default SystemSettings;