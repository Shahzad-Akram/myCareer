import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import objectPath from 'object-path';
import SVG from 'react-inlinesvg';
import { useHtmlClassService } from '../../_core/MetronicLayout';
import { toAbsoluteUrl } from '../../../_helpers';

import Logo from '../../../../assets/images/logos/logo.svg';

export function Brand() {
  const uiService = useHtmlClassService();

  const layoutProps = useMemo(() => {
    return {
      brandClasses: uiService.getClasses('brand', true),
      asideSelfMinimizeToggle: objectPath.get(
        uiService.config,
        'aside.self.minimize.toggle'
      ),
      headerLogo: uiService.getLogo(),
      headerStickyLogo: uiService.getStickyLogo(),
    };
  }, [uiService]);

  return (
    <>
      {/* begin::Brand */}
      <div
        className={`brand flex-column-auto my-10 ${layoutProps.brandClasses}`}
        id='kt_brand'
      >
        {/* begin::Logo */}
        <Link to='' className='brand-logo'>
          <img alt='logo' src={Logo} width={80} />
        </Link>
        {/* end::Logo */}

        {layoutProps.asideSelfMinimizeToggle && (
          <>
            {/* begin::Toggle */}
            <button
              className='brand-toggle btn btn-sm btn-light px-2'
              id='kt_aside_toggle'
            >
              <span className='svg-icon svg-logo-muted svg-icon-lg'>
                <SVG
                  src={toAbsoluteUrl(
                    '/media/svg/icons/Navigation/Angle-double-left.svg'
                  )}
                />
              </span>
            </button>
            {/* end::Toolbar */}
          </>
        )}
      </div>
      {/* end::Brand */}
    </>
  );
}
