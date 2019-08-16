import React from 'react';
import tt from 'counterpart';
import {
    formatDecimal,
    parsePayoutAmount,
} from 'app/utils/ParsersAndFormatters';

const SidebarInfo = ({ sct_to_steemp, steem_to_dollor, steem_to_krw }) => {
    const styleToken = { color: 'rgb(0, 120, 167)' };
    const krwp_to_steem =
        sct_to_steemp * 1000.0 / (sct_to_steemp * steem_to_krw);
    const krwp_to_sct = formatDecimal(1000.0 / (sct_to_steemp * steem_to_krw));
    const steem_price = formatDecimal(steem_to_dollor);
    const sct_price = formatDecimal(sct_to_steemp * steem_to_dollor);
    const sct_price_with_krw = formatDecimal(sct_to_steemp * steem_to_krw);
    const locale = tt.getLocale();

    return (
        <div className="c-sidebar__module">
            <div className="c-sidebar__header" style={styleToken}>
                <h3 className="c-sidebar__h3">Steemcoinpan Info</h3>
            </div>
            <div className="c-sidebar__content">
                <ul className="c-sidebar__list-small">
                    <li className="c-sidebar__list-item">
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div>{'STEEM'}</div>
                            <div>
                                {locale === 'ko' && (
                                    <span className="integer">
                                        {steem_to_krw + tt('g.krw') + ' ('}
                                    </span>
                                )}
                                <span>{'$'}</span>
                                <span className="integer">
                                    {steem_price[0]}
                                </span>
                                <span className="decimal">
                                    {steem_price[1]}
                                </span>
                                {locale === 'ko' && <span>{')'}</span>}
                            </div>
                        </div>
                    </li>
                    <li className="c-sidebar__list-item">
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div>{'SCT'}</div>
                            <div>
                                <span>
                                    {sct_to_steemp.toFixed(2) + ' STEEM, '}
                                </span>

                                {locale === 'ko' && (
                                    <span className="integer">
                                        {sct_price_with_krw[0] +
                                            tt('g.krw') +
                                            ' ('}
                                    </span>
                                )}
                                <span>{'$'}</span>
                                <span className="integer">{sct_price[0]}</span>
                                <span className="decimal">{sct_price[1]}</span>
                                {locale === 'ko' && <span>{')'}</span>}
                            </div>
                        </div>
                    </li>

                    <li className="c-sidebar__list-item">
                        <div
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div>{'KRWP'}</div>
                            <div>
                                <span>
                                    {krwp_to_steem.toFixed(3) + ' STEEM, '}
                                </span>

                                <span className="integer">
                                    {krwp_to_sct[0]}
                                </span>
                                <span className="decimal">
                                    {krwp_to_sct[1]}
                                </span>
                                <span>{' SCT'}</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default SidebarInfo;
