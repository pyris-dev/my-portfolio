import { useEffect } from "react";
import { TAB_ENTRIES, type Tab } from "../tabs";
import type { SetState } from "../../types/portfolio";

const getTabFromQuery = (): Tab | null => {
  const params = new URLSearchParams(window.location.search);
  const rawTab = params.get("tab");
  if (!rawTab) {
    return null;
  }

  const entry = TAB_ENTRIES.find(([tabKey]) => tabKey === rawTab);
  return entry ? entry[0] : null;
};

export const getInitialTabFromQuery = (): Tab =>
  getTabFromQuery() ?? "projects";

export function useTabQuery(activeTab: Tab, setActiveTab: SetState<Tab>) {
  useEffect(() => {
    const syncFromQuery = () => {
      const tabFromQuery = getTabFromQuery();
      if (tabFromQuery) setActiveTab(tabFromQuery);
    };

    syncFromQuery();
    window.addEventListener("popstate", syncFromQuery);
    return () => window.removeEventListener("popstate", syncFromQuery);
  }, [setActiveTab]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    params.set("tab", activeTab);
    const nextSearch = `?${params.toString()}`;

    if (window.location.search !== nextSearch)
      window.history.replaceState(
        null,
        "",
        `${window.location.pathname}${nextSearch}${window.location.hash}`,
      );
  }, [activeTab]);
}
