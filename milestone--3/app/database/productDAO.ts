import * as mysql from "mysql";
import {product} from "../model/product"
import * as util from "util";

export class productDAO
{

    
    private host ="localhost";
    private port= 3306;
    private username= "root";
    private password= "root";

    pool: any;

    constructor(host: string, port: number, username: string, password: string)
    {
        this.host=host;
        this.port = port;
        this.username = username;
        this.password = password;
    }
    /**
     * Getter $host
     * @return {string}
     */
	public get $host(): string {
		return this.host;
	}

    /**
     * Getter $port
     * @return {number}
     */
	public get $port(): number {
		return this.port;
	}

    /**
     * Getter $username
     * @return {string}
     */
	public get $username(): string {
		return this.username;
	}

    /**
     * Getter $password
     * @return {string}
     */
	public get $password(): string {
		return this.password;
	}

    /**
     * Setter $host
     * @param {string} value
     */
	public set $host(value: string) {
		this.host = value;
	}

    /**
     * Setter $port
     * @param {number} value
     */
	public set $port(value: number) {
		this.port = value;
	}

    /**
     * Setter $username
     * @param {string} value
     */
	public set $username(value: string) {
		this.username = value;
	}

    /**
     * Setter $password
     * @param {string} value
     */
	public set $password(value: string) {
		this.password = value;
	}

    public findAll(callback: any)
    {
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: this.host,
            user: this.username,
            password: this.password,
            database: 'artstoredb',
            port: this.port,
        });
        this.pool.getConnection(function(err:any, connection:any){
            
            if(err) throw err

            connection.query('SELECT * FROM PRODUCT', function(err:any, rows:any, fields:any){

                connection.release();

                if(err) throw err

                callback(rows);
            });
        });
    }

    public findById(id: string, callback: any)
    {
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: this.host,
            user: this.username,
            password: this.password,
            database: 'artstoredb',
            port: this.port,
        });
        this.pool.getConnection(function(err:any, connection:any){
            
            if(err) throw err

            connection.query('SELECT * FROM PRODUCT WHERE id ='+ id, function(err:any, rows:any, fields:any){

                connection.release();

                if(err) throw err

                callback(rows);
            });
        });
    }

    public deleteById(id: string, callback: any)
    {
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: this.host,
            user: this.username,
            password: this.password,
            database: 'artstoredb',
            port: this.port,
        });
        this.pool.getConnection(function(err:any, connection:any){
            
            if(err) throw err

            connection.query('DELETE FROM PRODUCT WHERE id ='+ id, function(err:any, rows:any, fields:any){

                connection.release();

                if(err) throw err

                callback("Successfully deteleted product with id of"+ id);
            });
        });
    }

    public addProduct(product: product, callback: any)
    {
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: this.host,
            user: this.username,
            password: this.password,
            database: 'artstoredb',
            port: this.port,
        });
        this.pool.getConnection(function(err:any, connection:any){
            
            if(err) throw err
            var prod = [product.$productName,product.$productDescription,product.$productPrice];
            connection.query('INSERT INTO PRODUCT (`PRODUCT_NAME`, `PRODUCT_DESCRIPTION`, `PRODUCT_PRICE`) VALUES (?)',[prod], function(err:any, rows:any, fields:any){

                connection.release();

                if(err) throw err

                callback("Successfully added the product to PRODUCT");
            });
        });
    }

    public updateProduct(product: product, callback: any)
    {
        this.pool = mysql.createPool({
            connectionLimit: 10,
            host: this.host,
            user: this.username,
            password: this.password,
            database: 'artstoredb',
            port: this.port,
        });
        this.pool.getConnection(function(err:any, connection:any){
            
            if(err) throw err
            let data = [product.$productPrice,product.$id];
            connection.query('UPDATE PRODUCT SET `PRODUCT_PRICE` = ? WHERE ID = ?',data, function(err:any, rows:any, fields:any){

                connection.release();

                if(err) throw err

                callback("Successfully updated product with id of "+ product.$id);
            });
        });
    }
}