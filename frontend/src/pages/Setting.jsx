import { useState, useEffect } from "react";

export function Setting() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const themes = ["light", "dark", "cupcake",
      "bumblebee",
      "emerald",
      "corporate",
      "synthwave",
      "retro",
      "cyberpunk",
      "valentine",
      "halloween",
      "garden",
      "forest",
      "aqua",
      "lofi",
      "pastel",
      "fantasy",
      "wireframe",
      "black",
      "luxury",
      "dracula",
      "cmyk",
      "autumn",
      "business",
      "acid",
      "lemonade",
      "night",
      "coffee",
      "winter",
      "dim",
      "nord",
      "sunset",];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-2xl mx-auto p-4">
        <div className="bg-base-200 rounded-xl p-6">
          <h1 className="text-2xl font-bold mb-6">Settings</h1>

          <div className="space-y-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Theme</span>
              </label>
              <select
                className="select select-bordered w-full"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
              >
                {themes.map((t) => (
                  <option key={t} value={t}>
                    {t.charAt(0).toUpperCase() + t.slice(1)}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
