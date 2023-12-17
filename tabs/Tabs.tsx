"use client";

type Props = {
  tabs: Tab[];
  className?: string;
  activeTab: string;
  setActiveTab: (tab: string) => void;
  onChange?: (tab: string) => void;
};

type Tab = {
  name: string;
  id: string;
  href?: string;
  amountBadge?: number;
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Tabs(props: Props) {
  return (
    <div className={props.className}>
      <div className="sm:hidden">
        <label htmlFor="tabs" className="sr-only">
          Select a tab
        </label>
        <select
          id="tabs"
          name="tabs"
          onChange={(e) => {
            props.setActiveTab(e.target.value);
            props.onChange && props.onChange(e.target.value);
          }}
          className="block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
          defaultValue={props.activeTab}
        >
          {props.tabs.map((tab) => (
            <option key={tab.id}>{tab.name}</option>
          ))}
        </select>
      </div>
      <div className="hidden sm:block">
        <div className="border-b border-gray-200">
          <nav className="-mb-px flex space-x-8" aria-label="Tabs">
            {props.tabs.map((tab) => (
              <a
                key={tab.name}
                href={tab.href || `#${tab.name.toLowerCase().trim()}`}
                onClick={(e) => {
                  e.preventDefault();
                  props.setActiveTab(tab.id);
                  props.onChange && props.onChange(tab.id);
                }}
                className={classNames(
                  props.activeTab === tab.id
                    ? "border-indigo-500 text-indigo-600"
                    : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700",
                  "whitespace-nowrap border-b-2 py-4 px-1 text-sm font-medium",
                )}
              >
                {tab.name}
                {tab.amountBadge ? (
                  <span
                    className={classNames(
                      tab.id === props.activeTab
                        ? "bg-indigo-100 text-indigo-600"
                        : "bg-gray-100 text-gray-900",
                      "ml-3 hidden rounded-full py-0.5 px-2.5 text-xs font-medium md:inline-block",
                    )}
                  >
                    {tab.amountBadge}
                  </span>
                ) : null}
              </a>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
}
