import { useContext } from "react";
import { TabIndexContext } from "./TabIndexContextProvider";

/**
 * Retrieve tabIndexValues from TabIndexContext.
 *
 * @returns {Object} tabIndexValues - tabIndex values stored on TabIndexContext
 */
export const useTabIndexValues = () => useContext(TabIndexContext);

export default useTabIndexValues;
