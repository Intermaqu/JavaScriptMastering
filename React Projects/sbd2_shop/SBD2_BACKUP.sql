--
-- PostgreSQL database dump
--

-- Dumped from database version 15.0
-- Dumped by pg_dump version 15.0

-- Started on 2023-01-02 13:55:17

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 868 (class 1247 OID 16422)
-- Name: gender_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.gender_enum AS ENUM (
    'Male',
    'Female',
    'Other'
);


ALTER TYPE public.gender_enum OWNER TO postgres;

--
-- TOC entry 871 (class 1247 OID 16438)
-- Name: status_enum; Type: TYPE; Schema: public; Owner: postgres
--

CREATE TYPE public.status_enum AS ENUM (
    'Posted',
    'Sold'
);


ALTER TYPE public.status_enum OWNER TO postgres;

SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- TOC entry 214 (class 1259 OID 16399)
-- Name: address; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.address (
    "Country" character varying(100) NOT NULL,
    "City" character varying(100) NOT NULL,
    "Street" character varying(100) NOT NULL,
    "Appartment" character varying(100) NOT NULL,
    "Postal_Code" character varying(20) NOT NULL,
    "ID_ADDRESS" integer NOT NULL
);


ALTER TABLE public.address OWNER TO postgres;

--
-- TOC entry 217 (class 1259 OID 16410)
-- Name: address_ID_ADDRESS_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.address ALTER COLUMN "ID_ADDRESS" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."address_ID_ADDRESS_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 223 (class 1259 OID 16444)
-- Name: category; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.category (
    "Name" character varying(100) NOT NULL,
    "Description" character varying(500),
    "ID_CATEGORY" integer NOT NULL
);


ALTER TABLE public.category OWNER TO postgres;

--
-- TOC entry 222 (class 1259 OID 16443)
-- Name: category_ID_CATEGORY_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.category ALTER COLUMN "ID_CATEGORY" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."category_ID_CATEGORY_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 227 (class 1259 OID 16504)
-- Name: colors; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.colors (
    "ID_COLOR" integer NOT NULL,
    name character varying(255)[] NOT NULL,
    color_hex character(6)[] NOT NULL
);


ALTER TABLE public.colors OWNER TO postgres;

--
-- TOC entry 230 (class 1259 OID 16525)
-- Name: colors_ID_COLOR_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.colors ALTER COLUMN "ID_COLOR" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."colors_ID_COLOR_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 228 (class 1259 OID 16511)
-- Name: delivery; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.delivery (
    "ID_DELIVERY" integer NOT NULL,
    company_name character varying(255)[] NOT NULL,
    type character varying(255)[] NOT NULL,
    price numeric(10,2) NOT NULL
);


ALTER TABLE public.delivery OWNER TO postgres;

--
-- TOC entry 231 (class 1259 OID 16526)
-- Name: delivery_ID_DELIVERY_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.delivery ALTER COLUMN "ID_DELIVERY" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."delivery_ID_DELIVERY_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 226 (class 1259 OID 16497)
-- Name: galery; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.galery (
    "ID_GALERY" integer NOT NULL,
    photo_1 character varying(255)[] NOT NULL,
    photo_2 character varying(255)[],
    photo_3 character varying(255)[],
    photo_4 character varying(255)[],
    "ID_PRODUCT" integer NOT NULL
);


ALTER TABLE public.galery OWNER TO postgres;

--
-- TOC entry 232 (class 1259 OID 16527)
-- Name: galery_ID_PRODUCT_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.galery ALTER COLUMN "ID_GALERY" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."galery_ID_PRODUCT_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 229 (class 1259 OID 16518)
-- Name: payment; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.payment (
    "ID_PAYMENT" integer NOT NULL,
    type character varying(255)[] NOT NULL,
    description character varying(255)[] NOT NULL
);


ALTER TABLE public.payment OWNER TO postgres;

--
-- TOC entry 233 (class 1259 OID 16528)
-- Name: payment_ID_PAYMENT_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.payment ALTER COLUMN "ID_PAYMENT" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."payment_ID_PAYMENT_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 216 (class 1259 OID 16405)
-- Name: producer; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.producer (
    "Name" character varying(100) NOT NULL,
    "ID_PRODUCER" integer NOT NULL,
    "Description" character varying(500),
    "ID_ADDRESS" integer NOT NULL
);


ALTER TABLE public.producer OWNER TO postgres;

--
-- TOC entry 215 (class 1259 OID 16404)
-- Name: producer_ID_PRODUCER_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.producer ALTER COLUMN "ID_PRODUCER" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."producer_ID_PRODUCER_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 221 (class 1259 OID 16430)
-- Name: product; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.product (
    "Name" character varying(100) NOT NULL,
    "Price" character varying(100) NOT NULL,
    "Description" character varying(510),
    "ID_PRODUCT" integer NOT NULL,
    "Status" public.status_enum NOT NULL,
    "ID_PRODUCER" integer NOT NULL,
    "ID_CATEGORY" integer,
    "ID_USER" integer NOT NULL,
    "ID_GALERY" integer NOT NULL,
    "ID_COLOR" integer
);


ALTER TABLE public.product OWNER TO postgres;

--
-- TOC entry 220 (class 1259 OID 16429)
-- Name: product_ID_PRODUCT_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.product ALTER COLUMN "ID_PRODUCT" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."product_ID_PRODUCT_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 225 (class 1259 OID 16452)
-- Name: transaction; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.transaction (
    "Date" date NOT NULL,
    "ID_TRANSACTION" integer NOT NULL,
    "ID_SELLER" integer NOT NULL,
    "ID_BUYER" integer NOT NULL,
    "ID_PRODUCT" integer NOT NULL,
    "ID_DELIVERY" integer NOT NULL,
    "ID_PAYMENT" integer NOT NULL
);


ALTER TABLE public.transaction OWNER TO postgres;

--
-- TOC entry 224 (class 1259 OID 16451)
-- Name: transaction_ID_TRANSACTION_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public.transaction ALTER COLUMN "ID_TRANSACTION" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."transaction_ID_TRANSACTION_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 219 (class 1259 OID 16414)
-- Name: user; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public."user" (
    "Name" character varying(100) NOT NULL,
    "Surname" character varying(100) NOT NULL,
    "Email" character varying(100) NOT NULL,
    "Nickname" character varying(100) NOT NULL,
    "Password" character varying(100) NOT NULL,
    "ID_USER" integer NOT NULL,
    "Gender" public.gender_enum,
    "ID_ADDRESS" integer
);


ALTER TABLE public."user" OWNER TO postgres;

--
-- TOC entry 218 (class 1259 OID 16413)
-- Name: user_ID_USER_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

ALTER TABLE public."user" ALTER COLUMN "ID_USER" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."user_ID_USER_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);


--
-- TOC entry 3225 (class 2606 OID 16403)
-- Name: address address_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pkey PRIMARY KEY ("ID_ADDRESS");


--
-- TOC entry 3233 (class 2606 OID 16450)
-- Name: category category_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY ("ID_CATEGORY");


--
-- TOC entry 3239 (class 2606 OID 16510)
-- Name: colors colors_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.colors
    ADD CONSTRAINT colors_pkey PRIMARY KEY ("ID_COLOR");


--
-- TOC entry 3241 (class 2606 OID 16517)
-- Name: delivery delivery_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT delivery_pkey PRIMARY KEY ("ID_DELIVERY");


--
-- TOC entry 3237 (class 2606 OID 16503)
-- Name: galery galery_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.galery
    ADD CONSTRAINT galery_pkey PRIMARY KEY ("ID_GALERY");


--
-- TOC entry 3243 (class 2606 OID 16524)
-- Name: payment payment_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_pkey PRIMARY KEY ("ID_PAYMENT");


--
-- TOC entry 3227 (class 2606 OID 16409)
-- Name: producer producer_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producer
    ADD CONSTRAINT producer_pkey PRIMARY KEY ("ID_PRODUCER");


--
-- TOC entry 3231 (class 2606 OID 16436)
-- Name: product product_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY ("ID_PRODUCT");


--
-- TOC entry 3235 (class 2606 OID 16456)
-- Name: transaction transaction_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT transaction_pkey PRIMARY KEY ("ID_TRANSACTION");


--
-- TOC entry 3229 (class 2606 OID 16420)
-- Name: user user_pkey; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT user_pkey PRIMARY KEY ("ID_USER");


--
-- TOC entry 3245 (class 2606 OID 16457)
-- Name: user FK_ADDRESS; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public."user"
    ADD CONSTRAINT "FK_ADDRESS" FOREIGN KEY ("ID_ADDRESS") REFERENCES public.address("ID_ADDRESS") NOT VALID;


--
-- TOC entry 3244 (class 2606 OID 16477)
-- Name: producer FK_ADDRESS; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.producer
    ADD CONSTRAINT "FK_ADDRESS" FOREIGN KEY ("ID_ADDRESS") REFERENCES public.address("ID_ADDRESS") NOT VALID;


--
-- TOC entry 3250 (class 2606 OID 16487)
-- Name: transaction FK_BUYER; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT "FK_BUYER" FOREIGN KEY ("ID_BUYER") REFERENCES public."user"("ID_USER") NOT VALID;


--
-- TOC entry 3246 (class 2606 OID 16467)
-- Name: product FK_CATEGORY; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT "FK_CATEGORY" FOREIGN KEY ("ID_CATEGORY") REFERENCES public.category("ID_CATEGORY") NOT VALID;


--
-- TOC entry 3247 (class 2606 OID 16544)
-- Name: product FK_COLOR; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT "FK_COLOR" FOREIGN KEY ("ID_COLOR") REFERENCES public.colors("ID_COLOR") NOT VALID;


--
-- TOC entry 3251 (class 2606 OID 16539)
-- Name: transaction FK_DELIVERY; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT "FK_DELIVERY" FOREIGN KEY ("ID_DELIVERY") REFERENCES public.delivery("ID_DELIVERY") NOT VALID;


--
-- TOC entry 3252 (class 2606 OID 16534)
-- Name: transaction FK_PAYMENT; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT "FK_PAYMENT" FOREIGN KEY ("ID_PAYMENT") REFERENCES public.payment("ID_PAYMENT") NOT VALID;


--
-- TOC entry 3248 (class 2606 OID 16472)
-- Name: product FK_PRODUCER; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT "FK_PRODUCER" FOREIGN KEY ("ID_PRODUCER") REFERENCES public.producer("ID_PRODUCER") NOT VALID;


--
-- TOC entry 3253 (class 2606 OID 16492)
-- Name: transaction FK_PRODUCT; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT "FK_PRODUCT" FOREIGN KEY ("ID_PRODUCT") REFERENCES public.product("ID_PRODUCT") NOT VALID;


--
-- TOC entry 3255 (class 2606 OID 16529)
-- Name: galery FK_PRODUCT; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.galery
    ADD CONSTRAINT "FK_PRODUCT" FOREIGN KEY ("ID_PRODUCT") REFERENCES public.product("ID_PRODUCT") NOT VALID;


--
-- TOC entry 3254 (class 2606 OID 16482)
-- Name: transaction FK_SELLER; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.transaction
    ADD CONSTRAINT "FK_SELLER" FOREIGN KEY ("ID_SELLER") REFERENCES public."user"("ID_USER") NOT VALID;


--
-- TOC entry 3249 (class 2606 OID 16462)
-- Name: product FK_USER; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.product
    ADD CONSTRAINT "FK_USER" FOREIGN KEY ("ID_USER") REFERENCES public."user"("ID_USER") NOT VALID;


-- Completed on 2023-01-02 13:55:17

--
-- PostgreSQL database dump complete
--

