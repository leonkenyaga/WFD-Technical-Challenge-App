import { proxy } from "valtio";

export const loadMore = proxy({
  state: false,
});

export const isModalOpen = proxy({
  state: false,
});
