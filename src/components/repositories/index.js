import React, { useEffect, useState } from 'react';
import RepositoryItem from '../repository-item';
import useGithub from '../../hooks/github-hooks';

import * as S from './styled';

const Repositories = () => {
	const { githubState, getUserRepos, getUserStarred } = useGithub();
	const [ hasUserForSearchRepos, setHasUserForSearchRepos ] = useState(false);

	useEffect(
		() => {
			if (githubState.user.login) {
				getUserRepos(githubState.user.login);
				getUserStarred(githubState.user.login);
			}
			setHasUserForSearchRepos(githubState.repositories);
		},
		[ githubState.user.login ]
	);
	return (
		<div>
			{hasUserForSearchRepos ? (
				<S.WrapperTabs selectedTabClassName="is-selected" selectedTabPanelClassName="is-selected">
					<S.WrapperTabList>
						<S.WrapperTab>Repositories</S.WrapperTab>
						<S.WrapperTab>Starred</S.WrapperTab>
					</S.WrapperTabList>
					<S.WrapperTabPanel>
						<S.WrapperList>
							{githubState.repositories.map((item) => (
								<RepositoryItem
									key={item.id}
									name={item.name}
									linkToRepo={item.html_url}
									fullName={item.full_name}
								/>
							))}
						</S.WrapperList>
					</S.WrapperTabPanel>
					<S.WrapperTabPanel>
						<S.WrapperList>
							{githubState.starred.map((item) => (
								<RepositoryItem
									key={item.id}
									name={item.name}
									linkToRepo={item.html_url}
									fullName={item.full_name}
								/>
							))}
						</S.WrapperList>
					</S.WrapperTabPanel>
				</S.WrapperTabs>
			) : (
				<div />
			)}
		</div>
	);
};

export default Repositories;
