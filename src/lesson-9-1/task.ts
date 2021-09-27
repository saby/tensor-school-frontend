export async function getUsers(): Promise<string[]> {
   const result: string[] = [];
   const response = await fetch('https://jsonplaceholder.typicode.com/users');
   const users = await response.json();
   users.forEach((user: {name: string}) => {
      result.push(user.name);
   });
   return result;
}

export async function createUser(user: object): Promise<object & {id: number}> {
   const response = await fetch('https://jsonplaceholder.typicode.com/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
         'Content-type': 'application/json'
      }
   });

   const createdUser = await response.json();
   return createdUser;
}