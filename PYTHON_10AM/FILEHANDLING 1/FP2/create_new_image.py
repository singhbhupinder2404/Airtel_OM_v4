fp1=open('india.png','rb')
img_data=fp1.read()
fp2=open('new_image.png','wb')
fp2.write(img_data)

print("Image copied successfully!")

fp2.close()
fp1.close()