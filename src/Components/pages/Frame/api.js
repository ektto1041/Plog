import axios from "axios";

// 모든 메뉴 가져오기
export const getMenus = async () => { 
  try {
    const response = await axios.get(`/menus`);

    if (response.statusText === "OK") {
      return response.data;
    } else {
      throw new Error(`API Error(${response.status})`)
    };
  } catch (e) {
    console.error('getMenus error: ', e);
    return [];
  }
};