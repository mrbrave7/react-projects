export function validEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
export function validUsername(username) {
    const usernameRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    return usernameRegex.test(username);
}
export function validFullname(fullName) {
    const fullNameRegex = /^[a-zA-ZÀ-ÖØ-öø-ÿ' -]+$/;
    return fullNameRegex.test(fullName) && fullName.trim().length > 0;
}
export function validPassword(password) {
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}
