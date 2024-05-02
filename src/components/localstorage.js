import {json} from "react-router-dom";

const getStoredProperty = () => {
    const StoredProperty = localStorage.getItem('fav-properties');
    if (StoredProperty){
        return JSON.parse(StoredProperty);
    }
    return [];
}


const saveFavProperties = id => {
    const storedProperties = getStoredProperty();
    const exists = storedProperties.find(propertyId => propertyId === id);
    if (!exists){
        storedProperties.push(id);
        localStorage.setItem('fav-properties', JSON.stringify(storedProperties))
    }
}

export {getStoredProperty, saveFavProperties}



