import { useEffect, useState } from "react"

const useToken = user =>{
    const [token, setToken] = useState('');
    console.log(user);
    useEffect( () =>{
        const email = user?.user?.email;
        console.log(email);
       
        //console.log(currentUser);
        if(email){
            const currentUser = {email: email};
            fetch(`http://localhost:5000/user/${email}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body:JSON.stringify(currentUser)
            })
            .then(res=>res.json())
            .then(data => {
                //console.log('data inside useToken', data);
                 const accessToken = data.token;
                 localStorage.setItem('accessToken', accessToken);
                 console.log(accessToken);
                 setToken(accessToken);
            })
        }

    }, [user]);
    return [token];
}

export default useToken;