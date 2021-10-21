import React from 'react';
import styled from 'styled-components/macro';

import {
  MAIN_STORY,
  OPINION_STORIES,
  SECONDARY_STORIES,
} from '../../data';

import SectionTitle from '../SectionTitle';
import MainStory from '../MainStory';
import SecondaryStory from '../SecondaryStory';
import OpinionStory from '../OpinionStory';
import Advertisement from '../Advertisement';
import { QUERIES } from '../../constants';

const MainStoryGrid = () => {
  return (
    <Wrapper>
      <MainStorySection>
        <MainStory {...MAIN_STORY} />
      </MainStorySection>

      <SecondaryStorySection>
        <StoryList>
          {SECONDARY_STORIES.map((story, index) => (
            <SecondaryStory key={story.id} {...story} />
          ))}
        </StoryList>
      </SecondaryStorySection>

      <OpinionSection>
        <SectionTitle>Opinion</SectionTitle>
        <StoryList>
          {OPINION_STORIES.map((story, index) => (
            <OpinionStory key={story.id} {...story} />
          ))}
        </StoryList>
      </OpinionSection>

      <AdvertisementSection>
        <Advertisement />
      </AdvertisementSection>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  grid-template-areas:
    'main-story'
    'secondary-stories'
    'opinion-stories'
    'advertisement';
  gap: 48px 0;
  margin-bottom: 48px;

  @media ${QUERIES.tabletAndUp}{
    grid-template-columns: 60% 1fr;
    grid-template-areas: 'main-story secondary-stories'
                              'advertisement advertisement'
                              'opinion-stories opinion-stories';
  }

  @media ${QUERIES.laptopAndUp}{
    grid-template-columns: 40% 35% 25%;
    grid-template-areas: 'main-story secondary-stories opinion-stories'
                              'main-story advertisement advertisement';
    gap: 0;
  }

`;

const MainStorySection = styled.section`
  grid-area: main-story;

  @media ${QUERIES.tabletAndUp}{
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
    margin-right: 16px;
  }
`;

const SecondaryStorySection = styled.section`
  grid-area: secondary-stories;

  @media ${QUERIES.laptopAndUp}{
    border-right: 1px solid var(--color-gray-300);
    padding-right: 16px;
    margin-right: 16px;
  }

`;

const StoryList = styled.div`
  display: flex;
  flex-direction: column;

  & > * {
    border-bottom: 1px solid var(--color-gray-300);
    padding: 16px 0; 

  }

  & > *:first-child{
    padding-top: revert;
  }

  & > *:last-child{
    padding-bottom: revert;
    border-bottom: revert;
  }

`;

const OpinionSection = styled.section`
  grid-area: opinion-stories;

  @media ${QUERIES.tabletOnly}{
    ${StoryList}{
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 32px;
      
      & > *{
        border-bottom: revert;
        padding: revert; 
      }
    }
  }
`;

const AdvertisementSection = styled.section`
  grid-area: advertisement;

  @media ${QUERIES.laptopAndUp}{
    border-top: 1px solid var(--color-gray-300);
    padding-top: 16px;
    margin-top: 16px;
  }

`;

export default MainStoryGrid;
