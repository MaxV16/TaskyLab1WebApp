export const getTasks = async () => {
    const  res = await fetch(
        `http://localhost:8080/api/tasks`
    )
        return res.json();
};

export const addTask = async(data) => {
    const res = await fetch(
        `http://localhost:8080/api/tasks`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
    )
        return res.json();
};

export const deleteTask = async (id) => {
    const res =  fetch(
        `http://localhost:8080/api/tasks/${id}`,
        {
            method: 'DELETE'
        }
    )
    return res;
};

export const updateTask = async (data) => {
    const res = await fetch(
        `http://localhost:8080/api/tasks/${data._id}`,
        {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        }
    )
        return res.json();
};
