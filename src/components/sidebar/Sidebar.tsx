import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchDataAction,
  setSectionFilter,
  setShowViral,
  setSortFilter,
  setWindowFilter,
} from "../../redux/action/actions";
import { RootState } from "../../redux/store";
import {
  SectionFilters,
  SortFilters,
  WindowFilters,
} from "../../utils/constants";
import DropdownMenu from "../dropdown/Dropdown";
import Toggle from "../toggle/Toggle";

import { SidebarContainer, TitleContainer } from "./Sidebar.styles";

const Sidebar = () => {
  const sectionOptions = Object.values(SectionFilters);
  const WindowOptions = Object.values(WindowFilters);
  const sortOptions = Object.values(SortFilters);

  const dispatch = useDispatch();
  const filters = useSelector((state: RootState) => state.filters);

  const handleSectionAction = (option: string) => {
    const action: any = setSectionFilter(option);
    dispatch(action);
    const fetchAction: any = fetchDataAction();
    dispatch(fetchAction);
  };

  const handleWindowAction = (option: string) => {
    const action: any = setWindowFilter(option);
    dispatch(action);
    const fetchAction: any = fetchDataAction();
    dispatch(fetchAction);
  };

  const handleSortAction = (option: string) => {
    const action: any = setSortFilter(option);
    dispatch(action);
    const fetchAction: any = fetchDataAction();
    dispatch(fetchAction);
  };

  const handleShowViralAction = () => {
    const action = setShowViral(!filters.showViral);
    dispatch(action);
    const fetchAction: any = fetchDataAction();
    dispatch(fetchAction);
  };
  return (
    <SidebarContainer>
      <TitleContainer>Show Viral:</TitleContainer>
      <Toggle handleToggle={handleShowViralAction} value={filters.showViral} />
      <TitleContainer>Section:</TitleContainer>
      <DropdownMenu
        handleFilterSelection={handleSectionAction}
        options={sectionOptions}
        selectedOption={filters.section}
      />

      <TitleContainer>Window:</TitleContainer>
      <DropdownMenu
        handleFilterSelection={handleWindowAction}
        options={WindowOptions}
        selectedOption={filters.window}
      />

      <TitleContainer>Sort:</TitleContainer>
      <DropdownMenu
        handleFilterSelection={handleSortAction}
        options={sortOptions}
        selectedOption={filters.sort}
      />
    </SidebarContainer>
  );
};

export default Sidebar;
