export const CURRENT_BRAND = "CURRENT_BRAND";

export const currentBrand = brand => {
  return {
    type: CURRENT_BRAND,
    payload: brand
  };
};
