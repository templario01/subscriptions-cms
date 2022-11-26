import React, { useState } from 'react'
import { PageContent } from '../../ui/page-content/PageContent'
import { ContentAccountSection } from './ContentAccountSection'
import { CreateAccountSection } from './CreateAccountSection'

export const AccountsPage = () => {
  const [showAccountsContent, setShowAccountsContent] = useState(true)

  const handleCreateAccount = () => {
    console.log(showAccountsContent)
    setShowAccountsContent(!showAccountsContent)
  }

  const handleBackToPanel = () => {
    console.log(showAccountsContent)
    setShowAccountsContent(!showAccountsContent)
  }
  return (
    <PageContent>
      <div className="h-full sm:px-8 pt-4">
        <ContentAccountSection
          isVisible={showAccountsContent}
          handleCreateAccount={handleCreateAccount}
        ></ContentAccountSection>
        <CreateAccountSection isVisible={!showAccountsContent} handleBack={handleBackToPanel} />
      </div>
    </PageContent>
  )
}
