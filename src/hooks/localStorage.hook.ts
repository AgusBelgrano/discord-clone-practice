const useLocalStorage = () => {

    const saveItem = (key:string, item: any) => {
        localStorage.setItem(key, item);
    }

    const getItem = (key: string) => {
        localStorage.getItem(key);
    }

    const removeItem = (key: string) => {
        localStorage.removeItem(key)
    }

    return {
        getItem,
        saveItem,
        removeItem
    }
}

export default useLocalStorage;
