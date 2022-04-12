import { v4 as uuidv4 } from "uuid";
import { hash } from "bcrypt";
import createConnection from "../index";

async function create() {
    const connection = await createConnection();
    const id = uuidv4();
    const password = await hash("admin", 8);

    await connection.query(
        `INSERT INTO USERS(id, name, password, email, driver_license, "isAdmin", created_at) 
        values('${id}', 'admin', '${password}', 'admin@app.com', 'AAAAAAAAAAAAA', true, 'now()')`
    );

    connection.close;
}

create().then(() => console.log("User admin created!"));
