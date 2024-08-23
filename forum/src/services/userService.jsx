import configStore from "../stores/ConfigStore";


const userServiceURL = configStore.getBaseURL() + "/accounts/";

const userService = {
    registerUser: async (userData) => {
        try {
            const response = await fetch(`${userServiceURL}register/`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });
            if (!response.ok) {
                throw new Error('Registration failed');
            }
            return await response.json();
        } catch (error) {
            console.error('Error:', error);
            throw error;
        }

    },
}


export default userService;