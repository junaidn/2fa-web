export const generateCode = () => {
    return `${Date.now().toString().slice(-3)} ${Math.floor(Math.random() * (999 - 100 + 1) + 100)}`;
};
