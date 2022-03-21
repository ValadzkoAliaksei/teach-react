export type StorageType = {
  tv: number;
  fridge: number;
  washingMashine: number;
};

export type InitialStorageStateType = {
  isLoading: boolean;
  isError: boolean;
  data: StorageType | null;
};
