const getProductById = async (id) => {
  const res = await fetch(`http://localhost:3000/products/${id}`);
  return res;
};

const getAllProducts = async () => {
  const res = await fetch('http://localhost:3000/products')
  return res;
}

const getAllUsers = async () => {
  const res = await fetch('http://localhost:3000/users')
  return res;
}

const changeUserProfile = async (id, data) => {
  const res = await fetch(`http://localhost:3000/users/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  })

  return res;
}

export { getProductById, getAllProducts, getAllUsers, changeUserProfile }


