export const checkLoginandPassword = data => {
    if (data.login.trim() === "s" && data.password.trim() === "s"){
        return data;
    }
    return null;
};