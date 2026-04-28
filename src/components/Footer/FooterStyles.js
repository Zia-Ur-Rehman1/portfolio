import styled from "styled-components"

export const FooterWrapper = styled.footer`
  width: 100%;
  max-width: 1200px;
  padding: 2rem 48px 40px;
  margin: 1rem auto;
  box-sizing: border-box;

  @media ${props => props.theme.breakpoints.md} {
    padding: 1.5rem 24px 32px;
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 1rem 16px 32px;
  }
`

export const LinkItem = styled.a`
	font-size: 16px;
	line-height: 28px;
	color: ${(props) => props.theme.colors.textTertiary};
	margin-bottom: 10px;
	transition: .3s ease;
	position: relative;
	left: 0;
	cursor: pointer;
	text-decoration: none;

	&:hover {
		color: ${(props) => props.theme.colors.textBright};
		left: 6px;
	}

	@media ${props => props.theme.breakpoints.md} {
		font-size: 15px;
		line-height: 26px;
		display: flex;
	}

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 14px;
		line-height: 22px;
		margin-bottom: 6px;
		display: flex;
		align-items: center;
	}
`

export const SocialIconsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 16px;
  border-top: 1px solid ${(props) => props.theme.colors.borderSoft};

  @media ${props => props.theme.breakpoints.md}{
    display: flex;
    justify-content: space-between;
  }

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 16px;
  }
`

export const CompanyContainer = styled.div`
  display: flex;
	align-items:baseline;
	flex-wrap: wrap;
	margin-right: auto;
	

	@media ${props => props.theme.breakpoints.md}{
		flex-direction: column;
		align-items: baseline;
	}

	@media ${props => props.theme.breakpoints.sm}{
		display: flex;
		flex-direction: column;
		margin: 0 0 32px;
		align-items: center;
	}
`


export const Slogan = styled.p`
	color: ${(props) => props.theme.colors.textMuted};
	letter-spacing: 0.02em;
	font-size: 15px;
	line-height: 24px;
	margin: 0;

	@media ${props => props.theme.breakpoints.md}{
		font-size: 14px;
		line-height: 22px;
	}

	@media ${props => props.theme.breakpoints.sm}{
		line-height: 20px;
		font-size: 13px;
		text-align: center;
	}
`

export const SocialContainer = styled.div`
	display: flex;
  align-items: center;

	@media ${props => props.theme.breakpoints.md}{
		justify-content: center;
		padding-right: 16px;
		flex-wrap: wrap;
	}
`


export const LinkList = styled.ul`
	border-top: 1px solid ${(props) => props.theme.colors.borderSoft};
  display: grid;
	grid-template-columns: repeat(3, minmax(180px, 1fr));
	gap: 40px;
  padding: 40px 0 28px;
	margin: 0;
	list-style: none;

	@media ${props => props.theme.breakpoints.lg} {
		padding: 32px 0 24px;
	}

	@media ${props => props.theme.breakpoints.md} {
		width: 100%;
		padding: 32px 0 24px;
		gap: 24px;
	}
	@media ${props => props.theme.breakpoints.sm} {
		display: grid;
		grid-template-columns: 1fr;
		width: 100%;
		padding: 24px 4px 16px;
		gap: 24px;
	}
`

export const LinkColumn = styled.li`
	display: flex;
	flex-direction: column;
	width: 100%;
	list-style: none;
`
export const LinkTitle = styled.h4`
	font-style: normal;
	font-weight: 600;
	font-size: 12px;
	line-height: 24px;
	text-transform: uppercase;
	color: ${(props) => props.theme.colors.textFaint};
	margin-bottom: 16px;

	@media ${props => props.theme.breakpoints.sm} {
		font-size: 10px;
		line-height: 12px;
		margin-bottom: 8px;
	}
`
