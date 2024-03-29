PGDMP         .                 {            sbd2    15.0    15.0 5    N           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            O           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            P           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            Q           1262    16858    sbd2    DATABASE     w   CREATE DATABASE sbd2 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Polish_Poland.1250';
    DROP DATABASE sbd2;
                postgres    false            R           0    0    SCHEMA public    ACL     T   REVOKE USAGE ON SCHEMA public FROM PUBLIC;
GRANT CREATE ON SCHEMA public TO PUBLIC;
                   pg_database_owner    false    6                        3079    16859 	   adminpack 	   EXTENSION     A   CREATE EXTENSION IF NOT EXISTS adminpack WITH SCHEMA pg_catalog;
    DROP EXTENSION adminpack;
                   false            S           0    0    EXTENSION adminpack    COMMENT     M   COMMENT ON EXTENSION adminpack IS 'administrative functions for PostgreSQL';
                        false    2            Y           1247    16870    gender_enum    TYPE     R   CREATE TYPE public.gender_enum AS ENUM (
    'Male',
    'Female',
    'Other'
);
    DROP TYPE public.gender_enum;
       public          postgres    false            \           1247    16878    status_enum    TYPE     E   CREATE TYPE public.status_enum AS ENUM (
    'Posted',
    'Sold'
);
    DROP TYPE public.status_enum;
       public          postgres    false            �            1259    16883    address    TABLE     0  CREATE TABLE public.address (
    "Country" character varying(100) NOT NULL,
    "City" character varying(100) NOT NULL,
    "Street" character varying(100) NOT NULL,
    "Appartment" character varying(100) NOT NULL,
    "Postal_Code" character varying(20) NOT NULL,
    "ID_ADDRESS" integer NOT NULL
);
    DROP TABLE public.address;
       public         heap    postgres    false            �            1259    16886    address_ID_ADDRESS_seq    SEQUENCE     �   ALTER TABLE public.address ALTER COLUMN "ID_ADDRESS" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."address_ID_ADDRESS_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    215            �            1259    16887    category    TABLE     �   CREATE TABLE public.category (
    "ID_CATEGORY" integer NOT NULL,
    "Name" character varying,
    "Description" character varying
);
    DROP TABLE public.category;
       public         heap    postgres    false            �            1259    16892    category_ID_CATEGORY_seq    SEQUENCE     �   ALTER TABLE public.category ALTER COLUMN "ID_CATEGORY" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."category_ID_CATEGORY_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    217            �            1259    16893    colors    TABLE     �   CREATE TABLE public.colors (
    "ID_COLOR" integer NOT NULL,
    "Name" character varying(255) NOT NULL,
    color_hex character(6) NOT NULL
);
    DROP TABLE public.colors;
       public         heap    postgres    false            �            1259    16896    colors_ID_COLOR_seq    SEQUENCE     �   ALTER TABLE public.colors ALTER COLUMN "ID_COLOR" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."colors_ID_COLOR_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    219            �            1259    16897    delivery    TABLE     �   CREATE TABLE public.delivery (
    "ID_DELIVERY" integer NOT NULL,
    price numeric(10,2) NOT NULL,
    company_name character varying,
    type character varying
);
    DROP TABLE public.delivery;
       public         heap    postgres    false            �            1259    16902    delivery_ID_DELIVERY_seq    SEQUENCE     �   ALTER TABLE public.delivery ALTER COLUMN "ID_DELIVERY" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."delivery_ID_DELIVERY_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    221            �            1259    16903    galery    TABLE     �   CREATE TABLE public.galery (
    "ID_GALERY" integer NOT NULL,
    photo_1 character varying(255) NOT NULL,
    photo_2 character varying(255),
    photo_3 character varying(255),
    photo_4 character varying(255)
);
    DROP TABLE public.galery;
       public         heap    postgres    false            �            1259    16908    galery_ID_PRODUCT_seq    SEQUENCE     �   ALTER TABLE public.galery ALTER COLUMN "ID_GALERY" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."galery_ID_PRODUCT_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    223            �            1259    16909    payment    TABLE     �   CREATE TABLE public.payment (
    "ID_PAYMENT" integer NOT NULL,
    type character varying,
    description character varying
);
    DROP TABLE public.payment;
       public         heap    postgres    false            �            1259    16914    payment_ID_PAYMENT_seq    SEQUENCE     �   ALTER TABLE public.payment ALTER COLUMN "ID_PAYMENT" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."payment_ID_PAYMENT_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    225            �            1259    16915    producer    TABLE     �   CREATE TABLE public.producer (
    "Name" character varying NOT NULL,
    "ID_PRODUCER" integer NOT NULL,
    "ID_ADDRESS" integer NOT NULL,
    "Description" character varying
);
    DROP TABLE public.producer;
       public         heap    postgres    false            �            1259    16920    producer_ID_PRODUCER_seq    SEQUENCE     �   ALTER TABLE public.producer ALTER COLUMN "ID_PRODUCER" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."producer_ID_PRODUCER_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    227            �            1259    16921    product    TABLE     �  CREATE TABLE public.product (
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
    DROP TABLE public.product;
       public         heap    postgres    false    860            �            1259    16926    product_ID_PRODUCT_seq    SEQUENCE     �   ALTER TABLE public.product ALTER COLUMN "ID_PRODUCT" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."product_ID_PRODUCT_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    229            �            1259    16927    transactions    TABLE     *  CREATE TABLE public.transactions (
    "Date" timestamp without time zone NOT NULL,
    "ID_TRANSACTION" integer NOT NULL,
    "ID_SELLER" integer NOT NULL,
    "ID_BUYER" integer NOT NULL,
    "ID_PRODUCT" integer NOT NULL,
    "ID_DELIVERY" integer NOT NULL,
    "ID_PAYMENT" integer NOT NULL
);
     DROP TABLE public.transactions;
       public         heap    postgres    false            �            1259    16930    transaction_ID_TRANSACTION_seq    SEQUENCE     �   ALTER TABLE public.transactions ALTER COLUMN "ID_TRANSACTION" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."transaction_ID_TRANSACTION_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    231            �            1259    16931    users    TABLE     1  CREATE TABLE public.users (
    "Name" character varying(100) NOT NULL,
    "Surname" character varying(100) NOT NULL,
    "Email" character varying(100) NOT NULL,
    "Password" character varying(100) NOT NULL,
    "ID_USER" integer NOT NULL,
    "Gender" public.gender_enum,
    "ID_ADDRESS" integer
);
    DROP TABLE public.users;
       public         heap    postgres    false    857            �            1259    16934    user_ID_USER_seq    SEQUENCE     �   ALTER TABLE public.users ALTER COLUMN "ID_USER" ADD GENERATED ALWAYS AS IDENTITY (
    SEQUENCE NAME public."user_ID_USER_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1
);
            public          postgres    false    233            �           2606    16936    colors Colors 
   CONSTRAINT     L   ALTER TABLE ONLY public.colors
    ADD CONSTRAINT "Colors" UNIQUE ("Name");
 9   ALTER TABLE ONLY public.colors DROP CONSTRAINT "Colors";
       public            postgres    false    219            �           2606    16938    category Name 
   CONSTRAINT     L   ALTER TABLE ONLY public.category
    ADD CONSTRAINT "Name" UNIQUE ("Name");
 9   ALTER TABLE ONLY public.category DROP CONSTRAINT "Name";
       public            postgres    false    217            �           2606    16940    producer Producer 
   CONSTRAINT     P   ALTER TABLE ONLY public.producer
    ADD CONSTRAINT "Producer" UNIQUE ("Name");
 =   ALTER TABLE ONLY public.producer DROP CONSTRAINT "Producer";
       public            postgres    false    227            �           2606    16942    address address_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.address
    ADD CONSTRAINT address_pkey PRIMARY KEY ("ID_ADDRESS");
 >   ALTER TABLE ONLY public.address DROP CONSTRAINT address_pkey;
       public            postgres    false    215            �           2606    16944    category category_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.category
    ADD CONSTRAINT category_pkey PRIMARY KEY ("ID_CATEGORY");
 @   ALTER TABLE ONLY public.category DROP CONSTRAINT category_pkey;
       public            postgres    false    217            �           2606    16946    colors colors_pkey 
   CONSTRAINT     X   ALTER TABLE ONLY public.colors
    ADD CONSTRAINT colors_pkey PRIMARY KEY ("ID_COLOR");
 <   ALTER TABLE ONLY public.colors DROP CONSTRAINT colors_pkey;
       public            postgres    false    219            �           2606    16948    delivery delivery_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.delivery
    ADD CONSTRAINT delivery_pkey PRIMARY KEY ("ID_DELIVERY");
 @   ALTER TABLE ONLY public.delivery DROP CONSTRAINT delivery_pkey;
       public            postgres    false    221            �           2606    16950    galery galery_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.galery
    ADD CONSTRAINT galery_pkey PRIMARY KEY ("ID_GALERY");
 <   ALTER TABLE ONLY public.galery DROP CONSTRAINT galery_pkey;
       public            postgres    false    223            �           2606    16952    payment payment_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.payment
    ADD CONSTRAINT payment_pkey PRIMARY KEY ("ID_PAYMENT");
 >   ALTER TABLE ONLY public.payment DROP CONSTRAINT payment_pkey;
       public            postgres    false    225            �           2606    16954    producer producer_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public.producer
    ADD CONSTRAINT producer_pkey PRIMARY KEY ("ID_PRODUCER");
 @   ALTER TABLE ONLY public.producer DROP CONSTRAINT producer_pkey;
       public            postgres    false    227            �           2606    16956    product product_pkey 
   CONSTRAINT     \   ALTER TABLE ONLY public.product
    ADD CONSTRAINT product_pkey PRIMARY KEY ("ID_PRODUCT");
 >   ALTER TABLE ONLY public.product DROP CONSTRAINT product_pkey;
       public            postgres    false    229            �           2606    16958    transactions transaction_pkey 
   CONSTRAINT     i   ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT transaction_pkey PRIMARY KEY ("ID_TRANSACTION");
 G   ALTER TABLE ONLY public.transactions DROP CONSTRAINT transaction_pkey;
       public            postgres    false    231            �           2606    16960    users user_pkey 
   CONSTRAINT     T   ALTER TABLE ONLY public.users
    ADD CONSTRAINT user_pkey PRIMARY KEY ("ID_USER");
 9   ALTER TABLE ONLY public.users DROP CONSTRAINT user_pkey;
       public            postgres    false    233            �           2606    16961    users FK_ADDRESS    FK CONSTRAINT     �   ALTER TABLE ONLY public.users
    ADD CONSTRAINT "FK_ADDRESS" FOREIGN KEY ("ID_ADDRESS") REFERENCES public.address("ID_ADDRESS") NOT VALID;
 <   ALTER TABLE ONLY public.users DROP CONSTRAINT "FK_ADDRESS";
       public          postgres    false    215    3226    233            �           2606    16966    producer FK_ADDRESS    FK CONSTRAINT     �   ALTER TABLE ONLY public.producer
    ADD CONSTRAINT "FK_ADDRESS" FOREIGN KEY ("ID_ADDRESS") REFERENCES public.address("ID_ADDRESS") NOT VALID;
 ?   ALTER TABLE ONLY public.producer DROP CONSTRAINT "FK_ADDRESS";
       public          postgres    false    3226    215    227            �           2606    16971    transactions FK_BUYER    FK CONSTRAINT     �   ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT "FK_BUYER" FOREIGN KEY ("ID_BUYER") REFERENCES public.users("ID_USER") NOT VALID;
 A   ALTER TABLE ONLY public.transactions DROP CONSTRAINT "FK_BUYER";
       public          postgres    false    3250    231    233            �           2606    16976    product FK_CATEGORY    FK CONSTRAINT     �   ALTER TABLE ONLY public.product
    ADD CONSTRAINT "FK_CATEGORY" FOREIGN KEY ("ID_CATEGORY") REFERENCES public.category("ID_CATEGORY") NOT VALID;
 ?   ALTER TABLE ONLY public.product DROP CONSTRAINT "FK_CATEGORY";
       public          postgres    false    217    229    3230            �           2606    16981    product FK_COLOR    FK CONSTRAINT     �   ALTER TABLE ONLY public.product
    ADD CONSTRAINT "FK_COLOR" FOREIGN KEY ("ID_COLOR") REFERENCES public.colors("ID_COLOR") NOT VALID;
 <   ALTER TABLE ONLY public.product DROP CONSTRAINT "FK_COLOR";
       public          postgres    false    219    3234    229            �           2606    16986    transactions FK_DELIVERY    FK CONSTRAINT     �   ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT "FK_DELIVERY" FOREIGN KEY ("ID_DELIVERY") REFERENCES public.delivery("ID_DELIVERY") NOT VALID;
 D   ALTER TABLE ONLY public.transactions DROP CONSTRAINT "FK_DELIVERY";
       public          postgres    false    231    221    3236            �           2606    16991    transactions FK_PAYMENT    FK CONSTRAINT     �   ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT "FK_PAYMENT" FOREIGN KEY ("ID_PAYMENT") REFERENCES public.payment("ID_PAYMENT") NOT VALID;
 C   ALTER TABLE ONLY public.transactions DROP CONSTRAINT "FK_PAYMENT";
       public          postgres    false    231    3240    225            �           2606    16996    product FK_PRODUCER    FK CONSTRAINT     �   ALTER TABLE ONLY public.product
    ADD CONSTRAINT "FK_PRODUCER" FOREIGN KEY ("ID_PRODUCER") REFERENCES public.producer("ID_PRODUCER") NOT VALID;
 ?   ALTER TABLE ONLY public.product DROP CONSTRAINT "FK_PRODUCER";
       public          postgres    false    227    3244    229            �           2606    17001    transactions FK_PRODUCT    FK CONSTRAINT     �   ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT "FK_PRODUCT" FOREIGN KEY ("ID_PRODUCT") REFERENCES public.product("ID_PRODUCT") NOT VALID;
 C   ALTER TABLE ONLY public.transactions DROP CONSTRAINT "FK_PRODUCT";
       public          postgres    false    229    3246    231            �           2606    17006    transactions FK_SELLER    FK CONSTRAINT     �   ALTER TABLE ONLY public.transactions
    ADD CONSTRAINT "FK_SELLER" FOREIGN KEY ("ID_SELLER") REFERENCES public.users("ID_USER") NOT VALID;
 B   ALTER TABLE ONLY public.transactions DROP CONSTRAINT "FK_SELLER";
       public          postgres    false    233    231    3250            �           2606    17011    product FK_USER    FK CONSTRAINT     �   ALTER TABLE ONLY public.product
    ADD CONSTRAINT "FK_USER" FOREIGN KEY ("ID_USER") REFERENCES public.users("ID_USER") NOT VALID;
 ;   ALTER TABLE ONLY public.product DROP CONSTRAINT "FK_USER";
       public          postgres    false    3250    233    229           