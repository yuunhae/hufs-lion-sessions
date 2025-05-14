import React, { useEffect, useState } from 'react';
import { fetchData } from './requests';
import styled from 'styled-components';

const AppContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #e0f0f5;
  display: flex;
  justify-content: center;
  align-items: center;
`;

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
  justify-content: space-between;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
`;

const Keyword = styled.span`
  font-weight: bold;
  color: #4a90e2;
`;

const LoadingText = styled.div`
  font-size: 18px;
  color: #888;
`;

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

const KeyWord = () => {
  const [keyWords, setKeywords] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 10; 

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      const result = await fetchData();

      if (result && result.body.itemList) {
        setKeywords(result.body.itemList.keyWordList);
      } else {
        setKeywords([]);
      }
      setLoading(false);
    };

    getData();
  }, []);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };

  if (loading) {
    return (
      <AppContainer>
        <ContentContainer>
          <LoadingText>로딩 중...</LoadingText>
        </ContentContainer>
      </AppContainer>
    );
  }

  if (!keyWords.length) {
    return (
      <AppContainer>
        <ContentContainer>
          <LoadingText>데이터가 없습니다.</LoadingText>
        </ContentContainer>
      </AppContainer>
    );
  }

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = keyWords.slice(startIndex, endIndex);

  return (
      <ContentContainer>
        <Header>법무부 대표 홈페이지 인기 검색어 상위 100개</Header>
        <ListContainer>
          {currentItems.map((item, index) => (
            <ListItem key={item.keyword}>
              <Keyword> {index+1}위 {item.keyword}</Keyword>
              <span>{item.searchNumber}</span>
            </ListItem>
          ))}
        </ListContainer>
        <ButtonContainer>
          <Button onClick={handlePrevPage} disabled={currentPage === 0}>
            이전
          </Button>
          <Button
            onClick={handleNextPage}
            disabled={endIndex >= keyWords.length}
          >
            다음
          </Button>
        </ButtonContainer>
      </ContentContainer>
  );
};

export default KeyWord;
