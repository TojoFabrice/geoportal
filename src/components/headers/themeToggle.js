import React from "react"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import { Switch } from "@headlessui/react"
import { SunIcon, MoonIcon } from "@heroicons/react/outline"

export default function ThemeToggle() {
  function classNames(...classes) {
    return classes.filter(Boolean).join(" ")
  }
  return (
    <ThemeToggler>
      {({ theme, toggleTheme }) => {
        if (theme == null) return null
        return (
          <div className="">
            {/* <Switch
              onChange={(e) => toggleTheme(theme === "dark" ? "light" : "dark")}
              checked={theme == "dark" ? true : false}
              className={classNames(
                theme === "dark" ? "bg-project-primary" : "bg-gray-200",
                "w-10 relative inline-flex flex-shrink-0 h-6 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-project-primary"
              )}
            >
              <span
                aria-hidden="true"
                className={classNames(
                  theme == "dark"
                    ? "translate-x-5 transform"
                    : "translate-x-0 transform",
                  "pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow ring-0"
                )}
              />
            </Switch> */}

            <Switch
              onChange={(e) => toggleTheme(theme === "dark" ? "light" : "dark")}
              checked={theme == "dark" ? true : false}
              className={classNames(
                theme === "dark" ? "" : "",
                "w-6 relative inline-flex flex-shrink-0 h-6 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-project-primary"
              )}
            >
              <MoonIcon
                className={classNames(
                  theme == "dark" ? "hidden" : "",
                  "text-gray-900 hover:text-gray-700"
                )}
              ></MoonIcon>
              <SunIcon
                className={classNames(
                  theme == "dark" ? "" : "hidden",
                  "text-gray-200 hover:text-gray-400"
                )}
              ></SunIcon>
            </Switch>
          </div>
        )
      }}
    </ThemeToggler>
  )
}
