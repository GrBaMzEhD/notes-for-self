/* eslint-disable */

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '127.0.0.1:8000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });

    if (res.data.status === 'success') {
      console.log(res.data.status);
    }
  } catch (err) {}
};

export const newNote = async (title, content) => {
  try {
    const res = await axios({
      method: 'POST',
      url: '127.0.0.1:8000/api/v1/notes',
      data: {
        owner: 'Gabriel Bryant',
        title: title,
        note_content: content,
      },
    });
    if (res.data.status === 'success') {
      console.log(res.data.status);
    }
  } catch (err) {}
};
