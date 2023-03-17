interface HasId {
  id: string;
}

export const uniqueId = <T extends HasId>(array: T[]) => {
  return Array.from(new Set(array.map((item) => item.id)));
};
