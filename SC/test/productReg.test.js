const ProductReg = artifacts.require('productReg');
const { expectRevert } = require('@openzeppelin/test-helpers');




contract('ProductReg', (accounts) => {
  let contractInstance;

  before(async () => {
    contractInstance = await ProductReg.new(); // Deploy a new instance of the contract
  });

  it('should create a product and retrieve its details', async () => {
    // Create a product
    const createProductTx = await contractInstance.createProduct(
      1, 'A', '2kg', '12P', 'Puru', 'Gasa'
    );
  
    // Retrieve the product details
    const productId = createProductTx.logs[0].args._id;
    const productDetails = await contractInstance.getProductById(productId);
  
    // Assert the retrieved details match the inputs used for creation
    assert.equal(productDetails._id, productId, 'Incorrect product ID');
    assert.equal(productDetails.quality, 'A', 'Incorrect product quality');
    assert.equal(productDetails.quantity, '2kg', 'Incorrect product quantity');
    assert.equal(productDetails.exporterLicense, '12P', 'Incorrect exporter license');
    assert.equal(productDetails.harvestor, 'Puru', 'Incorrect harvestor');
    assert.equal(productDetails.source, 'Gasa', 'Incorrect source');
  });


   it('should mark the QR code as scanned', async () => {
    // Generate a sample QR code
    const qrCode = web3.utils.asciiToHex('123456');

    // Verify that the QR code is initially not marked as scanned
    const isScannedBefore = await contractInstance.qrCodesScanned(qrCode);
    assert.equal(isScannedBefore, false, 'QR code should not be scanned before');

    // Scan the QR code
    await contractInstance.scanQRCode(qrCode, { from: accounts[0] });

    // Verify that the QR code is now marked as scanned
    const isScannedAfter = await contractInstance.qrCodesScanned(qrCode);
    assert.equal(isScannedAfter, true, 'QR code should be scanned after');
  });

  it('should not allow scanning the same QR code multiple times', async () => {
    // Generate a sample QR code
    const qrCode = web3.utils.asciiToHex('123456');

    // Scan the QR code for the first time
    await contractInstance.scanQRCode(qrCode, { from: accounts[0] });

    // Try to scan the same QR code again
    await expectRevert(
      contractInstance.scanQRCode(qrCode, { from: accounts[0] }),
      'QR code already scanned'
    );
  });


  it('should generate a QR code for a product', async () => {
    // Create a product
    const createProductTx = await contractInstance.createProduct(
      2, 'B', '3kg', '34P', 'John', 'Thimphu'
    );
    
    // Retrieve the generated QR code
    const productId = createProductTx.logs[0].args._id.toNumber();
    const qrCode = await contractInstance.getQRCodeById(productId);
    
    // Assert that the QR code is not empty
    assert.notEqual(qrCode, '', 'QR code should not be empty');
  });
  
  it('should throw an error when retrieving a non-existing product', async () => {
    try {
      // Attempt to retrieve a non-existing product
      await contractInstance.getProductById(999);
      
      // If the code reaches this point, the test should fail
      assert.fail('Expected an error but no error was thrown');
    } catch (error) {
      // Assert that the error message is as expected
      assert.include(error.message, 'Invalid product ID', 'Incorrect error message');
    }
  });

  it('should throw an error when retrieving a QR code for a non-existing product', async () => {
    try {
      // Attempt to retrieve a QR code for a non-existing product
      await contractInstance.getQRCodeById(999);
      
      // If the code reaches this point, the test should fail
      assert.fail('Expected an error but no error was thrown');
    } catch (error) {
      // Assert that the error message is as expected
      assert.include(error.message, 'Invalid product ID', 'Incorrect error message');
    }
  });
});


