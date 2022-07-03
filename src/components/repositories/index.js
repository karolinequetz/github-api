import React from 'react';
import RepositoryItem from '../repository-item';
import * as S from './styled';

const Repositories = () => {
	return (
		<S.WrapperTabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
			<S.WrapperTabList>
				<S.WrapperTab>Repositories</S.WrapperTab>
				<S.WrapperTab>Starred</S.WrapperTab>
			</S.WrapperTabList>
			<S.WrapperTabPanel>
				<RepositoryItem
					name="Barber"
					linkToRepo="https://github.com/karolinequetz/Barber"
					fullName="karolinequetz/Barber"
				/>
			</S.WrapperTabPanel>
			<S.WrapperTabPanel>
				<RepositoryItem
					name="jogo-da-memoria"
					linkToRepo="https://github.com/karolinequetz/jogo-da-memoria"
					fullName="karolinequetz/jogo-da-memoria"
				/>
			</S.WrapperTabPanel>
		</S.WrapperTabs>
	);
};

export default Repositories;
