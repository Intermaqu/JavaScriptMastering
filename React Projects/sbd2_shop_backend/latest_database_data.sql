PGDMP         /    
             {            postgres    15.0    15.0     \           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            ]           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            ^           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            _           1262    5    postgres    DATABASE     {   CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Polish_Poland.1250';
    DROP DATABASE postgres;
                postgres    false            F          0    16429    address 
   TABLE DATA           i   COPY public.address ("Country", "City", "Street", "Appartment", "Postal_Code", "ID_ADDRESS") FROM stdin;
    public          postgres    false    215          H          0    16433    category 
   TABLE DATA           H   COPY public.category ("Name", "Description", "ID_CATEGORY") FROM stdin;
    public          postgres    false    217   B       J          0    16439    colors 
   TABLE DATA           ?   COPY public.colors ("ID_COLOR", "Name", color_hex) FROM stdin;
    public          postgres    false    219   �       L          0    16445    delivery 
   TABLE DATA           L   COPY public.delivery ("ID_DELIVERY", company_name, type, price) FROM stdin;
    public          postgres    false    221   �       N          0    16451    galery 
   TABLE DATA           Q   COPY public.galery ("ID_GALERY", photo_1, photo_2, photo_3, photo_4) FROM stdin;
    public          postgres    false    223   �       P          0    16457    payment 
   TABLE DATA           B   COPY public.payment ("ID_PAYMENT", type, description) FROM stdin;
    public          postgres    false    225   a       R          0    16463    producer 
   TABLE DATA           V   COPY public.producer ("Name", "ID_PRODUCER", "Description", "ID_ADDRESS") FROM stdin;
    public          postgres    false    227   ~       X          0    16479    users 
   TABLE DATA           j   COPY public.users ("Name", "Surname", "Email", "Password", "ID_USER", "Gender", "ID_ADDRESS") FROM stdin;
    public          postgres    false    233   �       T          0    16469    product 
   TABLE DATA           �   COPY public.product ("Name", "Price", "Description", "ID_PRODUCT", "Status", "ID_PRODUCER", "ID_CATEGORY", "ID_USER", "ID_GALERY", "ID_COLOR") FROM stdin;
    public          postgres    false    229   �       V          0    16475    transactions 
   TABLE DATA           �   COPY public.transactions ("Date", "ID_TRANSACTION", "ID_SELLER", "ID_BUYER", "ID_PRODUCT", "ID_DELIVERY", "ID_PAYMENT") FROM stdin;
    public          postgres    false    231          a           0    0    address_ID_ADDRESS_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."address_ID_ADDRESS_seq"', 2, true);
          public          postgres    false    216            b           0    0    category_ID_CATEGORY_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."category_ID_CATEGORY_seq"', 2, true);
          public          postgres    false    218            c           0    0    colors_ID_COLOR_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."colors_ID_COLOR_seq"', 2, true);
          public          postgres    false    220            d           0    0    delivery_ID_DELIVERY_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."delivery_ID_DELIVERY_seq"', 1, false);
          public          postgres    false    222            e           0    0    galery_ID_PRODUCT_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."galery_ID_PRODUCT_seq"', 33, true);
          public          postgres    false    224            f           0    0    payment_ID_PAYMENT_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."payment_ID_PAYMENT_seq"', 1, false);
          public          postgres    false    226            g           0    0    producer_ID_PRODUCER_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."producer_ID_PRODUCER_seq"', 2, true);
          public          postgres    false    228            h           0    0    product_ID_PRODUCT_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."product_ID_PRODUCT_seq"', 14, true);
          public          postgres    false    230            i           0    0    transaction_ID_TRANSACTION_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."transaction_ID_TRANSACTION_seq"', 1, false);
          public          postgres    false    232            j           0    0    user_ID_USER_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."user_ID_USER_seq"', 2, true);
          public          postgres    false    234            F      x�342�4D�&�f��\��%��b���� ���      H   1   x�KN,IM�/�4�tI-N.�,(���S0�4�J����qq��qqq @      J   #   x�3�t���/R0�L.#��gp��qqq �
w      L      x������ � �      N   ~   x�32�L-O�KO����3��*HG����EE��%%�E� .#cjbBCL�a�51��!�0Ē
�P�CC89��1�`~AjNj��^��;H�1gRiIjNv"D�1B�-������ =;��      P      x������ � �      R   1   x�K��-H̫4�4�tI-N.�,(���S �!RF�F(R@>W� B��      X   $   x�342�4�` �K���8}sR9�b���� ��f      T   |   x�O,JNL��44�LLI���/.IM�4B#N#N#�pT%@
U�%5��j� j���B�$	T�R����\�Xd�`T㒟����Te��_�ZR��ihSh1�hS� ߪ3�      V      x������ � �     