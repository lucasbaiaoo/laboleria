import connectionDB from "../database/db.js"

export function cakesNamesConflictVerificationRepository(){
    return connectionDB.query("SELECT name FROM cakes;");
}

export function cakeInfoRepository(name, price, image, description){
    return connectionDB.query("INSERT INTO cakes (name, price, image, description) VALUES ($1, $2, $3, $4);", [name, price, image, description]);
}

export function cakesIdsRepository(){
    return connectionDB.query("SELECT id FROM cakes;");
}