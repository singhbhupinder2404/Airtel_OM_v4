fp1=open('data.txt', 'r')
data= fp1.read()
fp2=open('xyz.txt', 'w')
fp2.write(data)
print("New file created and written successfully.")




fp1.close()
fp2.close()