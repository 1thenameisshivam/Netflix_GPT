export const validate=(email,password)=>{
    const isEmailVAlid=/^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$/.test(email);
    const isPasswordValid=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/.test(password);
    
    if(!isEmailVAlid) return "Email is not valid"
    if(!isPasswordValid) return "Password is not valid"
    return null;
}