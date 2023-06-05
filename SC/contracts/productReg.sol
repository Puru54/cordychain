// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/utils/Strings.sol";

contract ProductReg {
    using Strings for uint256; // import the Strings library

    struct Product {
        uint _id;
        uint pid;
        string quality;
        string quantity;
        string exporterLicense;
        string harvestor;
        string source;
        bool scanned; // Add scanned property
    }

    mapping(uint => Product) public products;
    mapping(bytes => bool) public qrCodesScanned;

    uint public productCount = 0;

    event CreateProductEvent(
        uint _id,
        uint indexed pid,
        string quality,
        string quantity,
        string exporterLicense,
        string harvestor,
        string source
    );

    event ScanQRCodeEvent(bytes qrCode);
    event QRCodeEvent(bytes qrCode);


    constructor() {
        createProduct(1, "A", "2kg", "12P", "Puru", "Gasa");
    }

    function createProduct(
        uint pid,
        string memory _quality,
        string memory _quantity,
        string memory _exporterLicense,
        string memory _harvestor,
        string memory _source
    ) public returns (Product memory) {
        productCount++;
        products[productCount] = Product(
            productCount,
            pid,
            _quality,
            _quantity,
            _exporterLicense,
            _harvestor,
            _source,
            false // Initialize scanned as false
        );
        emit CreateProductEvent(
            productCount,
            pid,
            _quality,
            _quantity,
            _exporterLicense,
            _harvestor,
            _source
        );
        return products[productCount];
    }
    function getProductById(uint pid) public view returns (Product memory) {
    // require(pid > 0 && pid <= productCount, "Invalid product ID");

    // Assuming the product ID assigned during registration is stored in the `productId` field of the `Product` struct
    for (uint i = 1; i <= pid; i++) {
        if (products[i].pid == pid) {
            return products[i];
        }
    }

    revert("Product not found");
}


    function getQRCodeById(uint _id) public view returns (bytes memory) {
    require(_id > 0 && _id <= productCount, "Invalid product ID");
    return generateQRCode(products[_id]);
    }

    function generateQRCode(Product memory product) internal pure returns (bytes memory) {
    // Convert the product details into a concatenated string
    string memory productDetails = string(abi.encodePacked(
        product._id.toString(),
        product.pid.toString(),
        product.quality,
        product.quantity,
        product.exporterLicense,
        product.harvestor,
        product.source
    ));
    
    // Convert the string to bytes
    bytes memory qrCode = bytes(productDetails);
    // emit (qrCode);
    return qrCode;
}
function emitQRCodeEvent(bytes memory qrCode) internal {
    emit QRCodeEvent(qrCode);
}


    function scanQRCode(bytes memory qrCode) public {
        require(!qrCodesScanned[qrCode], "QR code already scanned");
        qrCodesScanned[qrCode] = true;
    }

    function scanProduct(uint pid) public {
    require(!products[pid].scanned, "Product already scanned");
    products[pid].scanned = true;
}

}

