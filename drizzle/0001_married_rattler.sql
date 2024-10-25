CREATE TABLE IF NOT EXISTS "cart" (
	"id" integer PRIMARY KEY GENERATED ALWAYS AS IDENTITY (sequence name "cart_id_seq" INCREMENT BY 1 MINVALUE 1 MAXVALUE 2147483647 START WITH 1 CACHE 1),
	"product" varchar,
	"quantity" integer NOT NULL,
	"name" varchar(255) NOT NULL,
	"email" varchar(255) NOT NULL,
	"address" varchar(500) NOT NULL,
	"price" numeric NOT NULL
);
--> statement-breakpoint
DROP TABLE "users";