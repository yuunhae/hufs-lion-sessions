import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { fetchData } from '../purchase/request';

const ContentContainer = styled.div`
  width: 100%;
  max-width: 480px;
  padding: 20px;
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Header = styled.h1`
  font-size: 24px;
  color: #3a3a3a;
  margin-bottom: 20px;
`;

const ListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
`;

const ListItem = styled.li`
  background-color: #f9f9f9;
  margin: 8px 0;
  padding: 12px;
  border-radius: 12px;
  font-size: 16px;
  color: #333;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

const Orders = styled.span`
  font-weight: bold;
  color: #4a90e2;
  margin: 2px 0px;
`;

const Company = styled.span`
    font-size: 12px;
`

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 20px;
`;

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 8px;
  background-color: #4a90e2;
  color: white;
  cursor: pointer;
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

function Purchase() {
    const [products, setProduct] = useState([])
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 5; 



    useEffect(() => {
        const getData = async () => {
            const result = await fetchData();
            
            if (result && result.body.itemList) {
                setProduct(result.body.itemList.purchasesGoodsList);
            } else {
                setProduct([]);
            }
          };
          getData();
    },[])

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
      };
    
      const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
      };

    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentItems = products.slice(startIndex, endIndex);


  return (
    <ContentContainer>
        <Header>
            자비 구매물품 
        </Header>
        <ListContainer>
          {currentItems.map((item, index) => (

                <ListItem key={index}>
                <span>[ {item.prcsDt} ]</span>
                  <Orders> {item.crrcInsttNm}에서 {item.gdltNm} 주문</Orders>
                  <Company>제공처 :  {item.suplyEtprNm}</Company>
                </ListItem>
            
          ))}
        </ListContainer>
        <ButtonContainer>
          <Button onClick={handlePrevPage} disabled={currentPage === 0}>
            이전
          </Button>
          <Button
            onClick={handleNextPage}
            disabled={endIndex >= products.length}
          >
            다음
          </Button>
        </ButtonContainer>

    </ContentContainer>
  )
}

export default Purchase;