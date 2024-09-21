export async function Register(data) {
    try {
        const response = await fetch("http://localhost:3000/api/v1/users/createUser", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
        if (!response.ok) {
            const errorText = await response.text();
            throw new Error(`Network response was not ok: ${response.status} ${errorText}`);
        }
        return await response.json();
    } catch (error) {
        console.error("Error during registration:", error);
        throw error;
    }
}
export async function LoginApi(data){
    try {
        const response = await fetch("http://localhost:3000/api/v1/users/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify(data)
        })
        if(!response.ok){
            const errorText = await response.text();
            throw new Error(`Network response was not ok: ${response.status} ${errorText}`);
        }
        return await response.json()
    } catch (error) {
        console.log(error)
    }
}