import React, {useState, createContext} from 'react';

export const Context = createContext();

export default function withContext(App) {
    return () => {
        const [selectedReward, setSelectedReward] = useState('');
        const [openThankYouDialog, setOpenThankYouDialog] = useState(false);

        const value = {
            selectedReward,
            setSelectedReward,
            openThankYouDialog,
            setOpenThankYouDialog,
        }

        return(
            <Context.Provider value={value}>
                <App/>
            </Context.Provider>
        )        
    }

}