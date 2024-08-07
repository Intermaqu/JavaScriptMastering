PGDMP     (    .                 {            sbd2    15.0    15.0     b           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            c           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            d           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            e           1262    16858    sbd2    DATABASE     w   CREATE DATABASE sbd2 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Polish_Poland.1250';
    DROP DATABASE sbd2;
                postgres    false            L          0    16883    address 
   TABLE DATA           i   COPY public.address ("Country", "City", "Street", "Appartment", "Postal_Code", "ID_ADDRESS") FROM stdin;
    public          postgres    false    215          N          0    16887    category 
   TABLE DATA           H   COPY public.category ("ID_CATEGORY", "Name", "Description") FROM stdin;
    public          postgres    false    217   @       P          0    16893    colors 
   TABLE DATA           ?   COPY public.colors ("ID_COLOR", "Name", color_hex) FROM stdin;
    public          postgres    false    219   �       R          0    16897    delivery 
   TABLE DATA           L   COPY public.delivery ("ID_DELIVERY", price, company_name, type) FROM stdin;
    public          postgres    false    221   �       T          0    16903    galery 
   TABLE DATA           Q   COPY public.galery ("ID_GALERY", photo_1, photo_2, photo_3, photo_4) FROM stdin;
    public          postgres    false    223   (       V          0    16909    payment 
   TABLE DATA           B   COPY public.payment ("ID_PAYMENT", type, description) FROM stdin;
    public          postgres    false    225   �       X          0    16915    producer 
   TABLE DATA           V   COPY public.producer ("Name", "ID_PRODUCER", "ID_ADDRESS", "Description") FROM stdin;
    public          postgres    false    227   �       ^          0    16931    users 
   TABLE DATA           j   COPY public.users ("Name", "Surname", "Email", "Password", "ID_USER", "Gender", "ID_ADDRESS") FROM stdin;
    public          postgres    false    233   :       Z          0    16921    product 
   TABLE DATA           �   COPY public.product ("Name", "Price", "Description", "ID_PRODUCT", "Status", "ID_PRODUCER", "ID_CATEGORY", "ID_USER", "ID_GALERY", "ID_COLOR") FROM stdin;
    public          postgres    false    229   }       \          0    16927    transactions 
   TABLE DATA           �   COPY public.transactions ("Date", "ID_TRANSACTION", "ID_SELLER", "ID_BUYER", "ID_PRODUCT", "ID_DELIVERY", "ID_PAYMENT") FROM stdin;
    public          postgres    false    231   A       f           0    0    address_ID_ADDRESS_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."address_ID_ADDRESS_seq"', 4, true);
          public          postgres    false    216            g           0    0    category_ID_CATEGORY_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."category_ID_CATEGORY_seq"', 13, true);
          public          postgres    false    218            h           0    0    colors_ID_COLOR_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."colors_ID_COLOR_seq"', 3, true);
          public          postgres    false    220            i           0    0    delivery_ID_DELIVERY_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."delivery_ID_DELIVERY_seq"', 2, true);
          public          postgres    false    222            j           0    0    galery_ID_PRODUCT_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."galery_ID_PRODUCT_seq"', 35, true);
          public          postgres    false    224            k           0    0    payment_ID_PAYMENT_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."payment_ID_PAYMENT_seq"', 2, true);
          public          postgres    false    226            l           0    0    producer_ID_PRODUCER_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."producer_ID_PRODUCER_seq"', 5, true);
          public          postgres    false    228            m           0    0    product_ID_PRODUCT_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."product_ID_PRODUCT_seq"', 16, true);
          public          postgres    false    230            n           0    0    transaction_ID_TRANSACTION_seq    SEQUENCE SET     N   SELECT pg_catalog.setval('public."transaction_ID_TRANSACTION_seq"', 2, true);
          public          postgres    false    232            o           0    0    user_ID_USER_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."user_ID_USER_seq"', 3, true);
          public          postgres    false    234            L   *   x�342�4D�&�f��\��%��IpE9�X�	W� ��      N   Q   x�3�T�H����442���K-wN,IM�/���K-W�q�9�Kc�@XĐ��6�qY�� �04�$r:#�b���� x#�      P   1   x�3�t���/R0�L.#��gps��&q*g����s��qqq ���      R   6   x�3�442�30���M,�T�H����2�444	f�&%r$&We�K�b���� =��      T   �   x�32�L-O�KO����3��*HG����EE��%%�E� .#cjbBCL�a�51��!�0Ē
�P�CC89��1�`~AjNj��^��;H�1gRiIjNv"D�1B�- *5A�a�)gFJn&�bA�rr��qqq �l      V   "   x�3�T�H����442�2�LN,J\1z\\\ v-E      X   /   x�K��-H̫4��?�d߈�|�Ԝ�|N���1W� �$�      ^   3   x�342�4�` �K���8}sR9��8�(��4�șp��qqq �,(      Z   �   x�e���0E�ӯ��{�j"	7�4k����ބ�A�4}���R��V/☴�(�����1,ٌ�)��5�����"J$`L1��3����:@,����{{�T�������s��ӡG�,��qQ��i�h4�s�{:h�?
	^���[AaL��B%��$%��)�}�ь�s�c���J,      \   ,   x�3202�50�54U02�2��2��4BcNCCNCN#�=... ���     