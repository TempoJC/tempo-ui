import type { Ref, MutableRefObject } from "react";

declare function useSyncedRef<T>(ref: Ref<T>): MutableRefObject<T>;

export { useSyncedRef as default };
