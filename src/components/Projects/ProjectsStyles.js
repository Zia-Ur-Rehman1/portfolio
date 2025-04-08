import styled from 'styled-components';

export const Img = styled.img`
  width: 100%;
  height: 200px; /* Fixed height for images */
  object-fit: cover; /* Ensure the image covers the area */
  border-radius: 15px 15px 0 0; /* Rounded corners for the top */
`;

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding-top: 3rem;
  padding-bottom: 3rem;
  place-items: center;
  column-gap: 1rem;
  row-gap: 3rem;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 1.5rem;
  }
`;

export const BlogCard = styled.div`
  background: #1e293b; /* Dark background for the card */
  border-radius: 15px; /* Rounded corners */
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */
  overflow: hidden; /* Ensure content stays within the card */
  width: 100%;
  max-width: 400px; /* Limit the card width */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px;
  height: 100%; /* Ensure consistent height */
  position: relative; /* To position the link button inside the card */
  transition: transform 0.3s ease, box-shadow 0.3s ease; /* Smooth hover effect */

  &:hover {
    transform: translateY(-5px); /* Slight lift on hover */
    box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
  }
`;

export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
  margin-top: 4rem;
  margin-bottom: 0.7em;
  color: #9cc9e3;
  font-size: 1.8rem;
`;

export const HeaderThree = styled.h3`
  font-weight: 600;
  font-size: 2rem;
  color: #9cc9e3; /* Light blue color for the title */
  text-align: left; /* Align the title to the left */
  margin: 0; /* Remove default margin */
  flex: 1; /* Allow the title to take up available space */
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 8px auto;
  border: 0;
  background: #d0bb57;
`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;

export const CardInfo = styled.p`
  color: #e4e6e7; /* Light text color */
  font-size: 1.4rem;
  line-height: 1.8;
  margin: 15px 0;
  text-align: justify; /* Align text for readability */
  flex-grow: 1; /* Ensure the text takes up available space */
`;

export const TitleContainer = styled.div`
  display: flex;
  align-items: center; /* Vertically align the title and link */
  justify-content: space-between; /* Space between title and link */
  margin-bottom: 1rem;
`;

export const ExternalLinks = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 1.4rem;
  width: 50px; /* Fixed width for the button */
  height: 25px; /* Fixed height for the button */
  background: linear-gradient(270deg, #6a11cb 0%, #2575fc 100%); /* Gradient background */
  border-radius: 25px; /* Rounded corners for a pill-like shape */
  text-decoration: none;
  transition: all 0.3s ease-in-out; /* Smooth transition for hover effects */
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2); /* Subtle shadow for depth */

  &:hover {
    background: linear-gradient(270deg, #2575fc 0%, #6a11cb 100%); /* Reverse gradient on hover */
    transform: translateY(-3px); /* Slight lift effect */
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3); /* Enhanced shadow on hover */
  }

  &:active {
    transform: translateY(1px); /* Slight press effect */
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.2); /* Reduced shadow on click */
  }
`;

export const Tag = styled.li`
  background-color: #2575fc; /* Primary color for the pill */
  color: #fff;
  padding: 5px 10px;
  margin: 5px;
  border-radius: 20px; /* Rounded corners for the pill shape */
  font-size: 12px;
  font-weight: 500;
  text-align: center;
  white-space: nowrap;
`;

export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap; /* Allow tags to wrap to the next line */
  justify-content: center;
  padding: 0;
  margin: 10px 0;
  list-style: none;
`;

export const UtilityList = styled.div`
  display: flex;
  justify-content: space-between; /* Space between buttons */
  margin-top: 20px;
`;
