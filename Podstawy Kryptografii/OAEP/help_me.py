import hashlib #sha-256
import binascii #Used for coverting between Ascii and binary
from random import SystemRandom #Generate secure random numbers

nBits = 1024
k0BitsInt = 256
k0BitsFill = '0256b' 
errors='surrogatepass'
encoding='utf-8'

def CharsToBinary(msg,errors):
	bits = bin(int.from_bytes(msg.encode(encoding,errors), 'big'))[2:]
	return bits.zfill(8 * ((len(bits) + 7) // 8))

def BinaryToChars(bits,errors):
	n = int(bits, 2)
	return n.to_bytes((n.bit_length() + 7) // 8, 'big').decode(encoding, errors) or '\0'

def pad(msg):
	oracle1 = hashlib.sha256()
	oracle2 = hashlib.sha256()
	randBitStr = format(SystemRandom().getrandbits(k0BitsInt), k0BitsFill )
	binMsg = CharsToBinary(msg, errors)

	if len(binMsg) <= (nBits-k0BitsInt):
		k1Bits = nBits - k0BitsInt - len(binMsg) 
		zeroPaddedMsg = binMsg + ('0'*k1Bits)
	oracle1.update(randBitStr.encode(encoding))
	x = format(int(zeroPaddedMsg, 2) ^ int(oracle1.hexdigest(), 16), '0768b')
	oracle2.update(x.encode(encoding))
	y = format(int(oracle2.hexdigest(), 16) ^ int(randBitStr, 2), k0BitsFill)

	return x+y

def unpad(msg):
	oracle1 = hashlib.sha256()
	oracle2 = hashlib.sha256()

	x = msg[0:768]
	y = msg[768:]

	oracle2.update(x.encode(encoding))
	r = format(int(y,2) ^ int(oracle2.hexdigest(), 16), k0BitsFill)

	oracle1.update(r.encode(encoding))
	msgWith0s = format( int(x,2) ^ int(oracle1.hexdigest(), 16), '0768b')

	return BinaryToChars(msgWith0s, errors)


msg = format(SystemRandom().getrandbits(nBits), '01024b' )
	
print ("ORIGINAL MSG:\n", msg, "\n" )

output = pad(msg)
print ( "PADDED MSG:\n", output,
	   	"\n\nLENGTH OF PADDED MSG:\n", len(output),
	    "\nEXPECTED LENGTH:\n", nBits)

result = unpad(output)
print ("\nUNPADDED MSG:\n",result)