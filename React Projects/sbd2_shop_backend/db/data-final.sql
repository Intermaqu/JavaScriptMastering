PGDMP         2    
             {            sbd2    15.0    15.0     e           0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                      false            f           0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                      false            g           0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                      false            h           1262    16690    sbd2    DATABASE     w   CREATE DATABASE sbd2 WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Polish_Poland.1250';
    DROP DATABASE sbd2;
                postgres    false            O          0    16715    address 
   TABLE DATA           i   COPY public.address ("Country", "City", "Street", "Appartment", "Postal_Code", "ID_ADDRESS") FROM stdin;
    public          postgres    false    215          Q          0    16719    category 
   TABLE DATA           H   COPY public.category ("ID_CATEGORY", "Name", "Description") FROM stdin;
    public          postgres    false    217   A       S          0    16725    colors 
   TABLE DATA           ?   COPY public.colors ("ID_COLOR", "Name", color_hex) FROM stdin;
    public          postgres    false    219   �       U          0    16729    delivery 
   TABLE DATA           L   COPY public.delivery ("ID_DELIVERY", price, company_name, type) FROM stdin;
    public          postgres    false    221   2       W          0    16735    galery 
   TABLE DATA           Q   COPY public.galery ("ID_GALERY", photo_1, photo_2, photo_3, photo_4) FROM stdin;
    public          postgres    false    223   y       Y          0    16741    payment 
   TABLE DATA           B   COPY public.payment ("ID_PAYMENT", type, description) FROM stdin;
    public          postgres    false    225   I       [          0    16747    producer 
   TABLE DATA           V   COPY public.producer ("Name", "ID_PRODUCER", "ID_ADDRESS", "Description") FROM stdin;
    public          postgres    false    227   �       a          0    16763    users 
   TABLE DATA           j   COPY public.users ("Name", "Surname", "Email", "Password", "ID_USER", "Gender", "ID_ADDRESS") FROM stdin;
    public          postgres    false    233          ]          0    16753    product 
   TABLE DATA           �   COPY public.product ("Name", "Price", "Description", "ID_PRODUCT", "Status", "ID_PRODUCER", "ID_CATEGORY", "ID_USER", "ID_GALERY", "ID_COLOR") FROM stdin;
    public          postgres    false    229   K       _          0    16759    transactions 
   TABLE DATA           �   COPY public.transactions ("Date", "ID_TRANSACTION", "ID_SELLER", "ID_BUYER", "ID_PRODUCT", "ID_DELIVERY", "ID_PAYMENT") FROM stdin;
    public          postgres    false    231   �       i           0    0    address_ID_ADDRESS_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."address_ID_ADDRESS_seq"', 4, true);
          public          postgres    false    216            j           0    0    category_ID_CATEGORY_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public."category_ID_CATEGORY_seq"', 17, true);
          public          postgres    false    218            k           0    0    colors_ID_COLOR_seq    SEQUENCE SET     C   SELECT pg_catalog.setval('public."colors_ID_COLOR_seq"', 3, true);
          public          postgres    false    220            l           0    0    delivery_ID_DELIVERY_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."delivery_ID_DELIVERY_seq"', 2, true);
          public          postgres    false    222            m           0    0    galery_ID_PRODUCT_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."galery_ID_PRODUCT_seq"', 39, true);
          public          postgres    false    224            n           0    0    payment_ID_PAYMENT_seq    SEQUENCE SET     F   SELECT pg_catalog.setval('public."payment_ID_PAYMENT_seq"', 2, true);
          public          postgres    false    226            o           0    0    producer_ID_PRODUCER_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public."producer_ID_PRODUCER_seq"', 5, true);
          public          postgres    false    228            p           0    0    product_ID_PRODUCT_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."product_ID_PRODUCT_seq"', 20, true);
          public          postgres    false    230            q           0    0    transaction_ID_TRANSACTION_seq    SEQUENCE SET     O   SELECT pg_catalog.setval('public."transaction_ID_TRANSACTION_seq"', 10, true);
          public          postgres    false    232            r           0    0    user_ID_USER_seq    SEQUENCE SET     @   SELECT pg_catalog.setval('public."user_ID_USER_seq"', 3, true);
          public          postgres    false    234            O   *   x�342�4D�&�f��\��%��IpE9�X�	W� ��      Q   �   x�M�M�@F��)&qo����41F]��*�f�L�Z��)�V����4�I�e)@:�%����E\[�jH���Һ��~��q:�E�HF,������1��T�!!�`/�?����ܴj��
�����Hs�i8�J�\,���QVN�S͏b:E�7_L�      S   1   x�3�JM�LK3 .#N����<N� �1�SNi*'H*-�+F��� �
�      U   7   x�3�44�30�t	p��.-�L-�2�44 	y���p$&We��&�p��qqq /8�      W   �   x�����0E�ӏ!2�����
�k�~��A�a;�{��s�("�Y����16��VL�g���i7�v��SH2
IN!)($%�����~���;	 ��/�G��.MΧ�]�p}�w�\���ŭ[E���<���.�_��e�2�%-^�i0�u��A����\�-�����U�� CX�$����A�      Y   ?   x�3�L.JM�,QHN,J�tLNN-(��KW�,NT�M,.I-r�pq��&��!�1y\1z\\\ [y�      [   `   x����..OLO��4B��b�Ғ|.� N# �I,(�/�T�KT��L,JU(��,���/N���K-.�I�4��O�̭T�JM�J��L����� D=�      a   3   x�342�4�` �K���8}sR9��8�(��4�șp��qqq �,(      ]   �   x�U�K
�@E���U���|6�8�|!1-1�IVo�$*E���9?#�PxP��kK�@�b���O -s�@��� � �%b��Wb�V�@��Ȝot󘇱QP������˭���u�����ޕc1خ�o��c��B6�      _   |   x�}���0C�d�,�
��I�����I�/��V .<*mSl���:�va�	 &����\����1�6'�\�a@���R�}(�;P�1�}f�?��n���%�D_�IpY�{J��0m     