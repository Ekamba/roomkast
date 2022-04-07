import React from "react";
import TermsConditions from "./TermsConditions";
import { useTranslation } from "react-i18next";

const Collapse = (props) => {
  const [t] = useTranslation("common");
  return (
    <div className="terms_Conditions_container">
      <h1>{t("Terms & Conditions.title")}</h1>
      <div className="items_wrapper">
        <div>
          <TermsConditions
            title={`1. ${t("Acceptance of terms.title")}`}
            text="By registering and using the platform, you agree to be bound by this
      agreement. If you do not accept the terms of this agreement, you
      should not use the platform and discontinue use of the service
      immediately. We may modify this agreement from time to time, and
      such modification shall be effective upon its posting on the
      platform. You agree to be bound by any modification to this terms
      and conditions when you use Roomkast after any such modification is
      posted; it is therefore important that you review this agreement
      regularly. You represent and warrant that your use of the platform
      does not violate any applicable law or regulation. Roomkast may, in
      its sole discretion, refuse to offer the services to any user and
      change its eligibility criteria at any time. This provision is void
      where prohibited by law and the right to access the service and the
      platform is revoked in such jurisdictions. The platform may only be
      used in compliance with these terms and all applicable local, state,
      national and international laws, rules and regulations. By
      registering and using the platform, you represent and warrant that
      you have the full right, power and authority to enter into this
      agreement and to fully perform all of your obligations hereunder.
      You further represent and warrant that you are under no legal
      disability or contractual restriction that prevents you from
      entering into this agreement.
      By registering and using the platform, you agree to be bound by this
      agreement. If you do not accept the terms of this agreement, you
      should not use the platform and discontinue use of the service
      immediately. We may modify this agreement from time to time, and
      such modification shall be effective upon its posting on the
      platform. You agree to be bound by any modification to this terms
      and conditions when you use Roomkast after any such modification is
      posted; it is therefore important that you review this agreement
      regularly. You represent and warrant that your use of the platform
      does not violate any applicable law or regulation. Roomkast may, in
      its sole discretion, refuse to offer the services to any user and
      change its eligibility criteria at any time. This provision is void
      where prohibited by law and the right to access the service and the
      platform is revoked in such jurisdictions. The platform may only be
      used in compliance with these terms and all applicable local, state,
      national and international laws, rules and regulations. By
      registering and using the platform, you represent and warrant that
      you have the full right, power and authority to enter into this
      agreement and to fully perform all of your obligations hereunder.
      You further represent and warrant that you are under no legal
      disability or contractual restriction that prevents you from
      entering into this agreement."
          />
          <TermsConditions
            title={`2. ${t("Users.title")}`}
            text="By registering as a user on the platform to publish and manage
      properties, search and rent properties, create and sign rental
      contracts and in general, use the functionalities and services
      available on the platform, the user declares to accept the terms and
      conditions contained in this agreement. Users who register and use
      the functionalities available on the platform must undergo a
      verification process in which they must provide their ID or Passport
      in order to verify their identity. By registering on the platform,
      the user authorizes us to perform the necessary verifications.
      Roomkast reserves the right to reject any user who, in Roomkast's
      opinion, does not comply with the conditions to publish or rent
      properties listed on the platform and use the functionalities and
      services available on the platform. In consideration of your use of
      the platform as a user, you represent that you are of legal age to
      form a binding contract under any applicable jurisdiction. You also
      agree to (a) provide true, accurate, current and complete
      information about yourself as prompted by the registration form
      available on Roomkast and (b) maintain and promptly update your
      registration data to keep it true, accurate, current and complete.
      If we have reasonable grounds to suspect that such data is untrue,
      inaccurate, not current or incomplete, Roomkast reserves the right
      to suspend or terminate your account, remove your postings from the
      platform and refuse any and all current or future use of the
      service, at any time and without notice if Roomkast reasonably
      believes that you have violated any provision of these terms and
      conditions. Users may share personal and business information
      through the platform with other users. Any information that users
      share through the platform is the sole responsibility of the users
      themselves. Users are free to share information, but are responsible
      for the use of such information, its publication and disclosure.
      Roomkast is not responsible for the information posted and shared
      through the platform. The information you provide and post in
      connection with the properties you post through the platform may be
      visible to the general public."
          />
          <TermsConditions
            title={`3. ${t("Account.title")}`}
            text="If you register on the platform, you will be asked to choose a password, and you may be asked for additional information or documentation, such as your name, email address, phone number, address, ID or passport. You are responsible for maintaining the confidentiality of your password and account information, and are fully responsible for all activities that occur under your password or account. Users will be able to register and log in to the platform through their social network accounts. You are responsible for maintaining the confidentiality of your account information, and are fully responsible for all activities that occur under your account. You agree to (a) immediately notify Roomkast of any unauthorized use of your account or any other breach of security, and (b) ensure that you log out of your account at the end of each session. You may never use another user's account without Roomkast's prior authorization. Roomkast will not be liable for any loss or damage arising from your failure to comply with this agreement.
            By providing Roomkast with your email address and phone number, you agree that we may use your email address to send you notifications, important communications about our services, news and special content. We may also use your email address and phone number to send you notifications via SMS messages, push notifications and other messages, such as changes to service features, news and special content. If you do not wish to receive these emails, SMS
            messages or push notifications, you may opt-out of receiving them by sending us your request through our contact information or by using the 'unsubscribe' option in emails or by replying with the word 'STOP' to SMS messages. Users can select not to receive push notifications through their profile and account settings.
            Users may cancel their accounts at any time and for any reason by following the instructions on the platform or by sending us their request through our contact information. That termination will only result in the deletion of the account and the deletion of all the personal data granted to Roomkast.
            Roomkast reserves the right to terminate your account or your access immediately, with or without notice to you, and without liability to you, if Roomkast believes that you have breached any of these terms, furnished Roomkast with false or misleading information, or interfered with use of the platform or the service by others."
          />
          <TermsConditions
            title={`4. ${t("Listings and contracts.title")}`}
            text="Users will be able to publish their properties for rent through the listings available on the platform. Users who wish to publish their properties for rent on the platform must be the legal owners of the property or have the necessary licenses and permissions from the actual owners to publish and rent the property on the platform. Roomkast reserves the right to verify the ownership of the properties that users publish and rent through the platform. Owners must provide accurate and detailed information about the properties as well as accurate and current photographs or videos of the properties. Roomkast reserves the right to remove properties from listings that in Roomkast's opinion do not meet sufficient conditions for publication within the platform.
            Users will be able to create and sign rental contracts through the platform and agree on the conditions, value and payment of the rents of the properties in the contracts. Please note that a contract is an agreement of wills and that by signing the contract the parties are contracting the obligations agreed in the contract. Failure to comply with the obligations contained and agreed in the contracts may entitle the affected party to claim the fulfillment of the obligations through the courts. Users must take into account that although the contracts are created and signed through the platform, Roomkast is not part of the lease contracts and is not part of the transactions agreed in the contracts."
          />
          <TermsConditions
            title={`5. ${t("Commissions.title")}`}
            text="Landlords and tenants will pay a 2% commission to Roomkast of the
            total amount paid by tenants, for the rentals of the properties
            listed on the platform and for the value paid for the deposit
            before the tenant moves into the property. From each rental
            payment made through the platform under the rental contracts
            created and signed on the platform, including the value of the
            deposit, Roomkast will deduct 2% to tenants and landlords from the
            corresponding total value and the remaining amount will be
            transferred to the respective landlord during the corresponding
            payment dates. In the case of the deposit, Roomkast will hold the
            deposit until the tenant moves into the property, once the tenant
            moves into the property, Roomkast will transfer the value of the
            deposit to the landlord with the value of the commission deducted.
            If the tenant cancels the move in one week before the move in
            date, Roomkast will collect the deposit in proportion to the
            rental price and this will be transferred to the respective
            landlord with the value of the commission deducted. The commission
            value will be deducted from each rental or deposit payment made by
            tenants through the platform, before any deduction for applicable
            fees or taxes."
          />
          <TermsConditions
            title={`6. ${t("Payments.title")}`}
            text="Payments of the rents agreed in the lease contracts shall be made
            through our payment processor available on the platform. The
            payment of rents must be made on the dates agreed in the lease
            agreements created and signed through the platform. Users shall be
            solely and exclusively responsible for complying with the
            obligations agreed in the lease agreements created and signed
            through the platform. Rental payments made through our platform
            will be deposited and retained in our bank account until they must
            be transferred to the corresponding owner. The payment of the
            rentals will be charged to the credit/debit card of the paying
            user immediately upon completion of the payment process of the
            corresponding invoice. Once the transaction has been processed, we
            will send an electronic receipt of the transaction to the paying
            user's email address. If you find any inconsistencies in your
            billing, please contact us via our contact details or you can make
            a complaint via the customer service of the relevant payment
            platform. If your card is declined, you will receive an error
            message. No payment will be charged to your card and no order will
            be processed. There may be a pending transaction on your account
            until your card issuing bank withdraws the authorization. This
            usually takes 2 to 5 working days. Your card may be declined for a
            number of reasons, such as insufficient funds, AVS (Address
            Verification System) mismatch or you have entered an incorrect
            security code. If your payment is declined, you will need to
            provide an alternative payment method or provide another card on
            which the payment can be loaded and processed. Your payment
            details will be treated and safeguarded securely and for the sole
            purpose of processing the purchase of the plans and services.
            Roomkast reserves the right to engage any payment platform
            available on the market, which processes your data for the sole
            purpose of processing the purchase of the plans and services."
          />
          <TermsConditions
            title={`7. ${t("License to use the platform.title")}`}
            text="Roomkast gives you a personal, worldwide, royalty-free,
            non-assignable and non-exclusive license to use the platform
            provided to you by Roomkast as part of the services. This license
            is for the sole purpose of enabling you to use and enjoy the
            benefit of the services as provided by Roomkast, in the manner
            permitted by these terms. You may not copy, modify, distribute,
            sell, or lease any part of our services or included software, nor
            may you reverse engineer or attempt to extract the source code of
            that software, unless laws prohibit those restrictions or you have
            our written permission. The user agrees not to use the platform
            and the services negligently, for fraudulent purposes or in an
            unlawful manner. Likewise, the user agrees not to partake in any
            conduct or action that could damage the image, interests or rights
            of the Roomkast platform or third parties. This service prohibits
            sending of messages, that: (1) Any kind of messages that are
            catalogued as SPAM. (2) Are harassing, abusive, defamatory,
            obscene, in bad faith, unethical or otherwise illegal content (3)
            distribute trojans, viruses or other malicious computer software
            (4) Any message with political or religious content (5) Any
            message with obscene or offensive content (6) Are intending to
            commit fraud, impersonating other persons, phishing, scams, or
            related crime (7) distribute intellectual property without
            ownership or a license to distribute such property (8) Breach, in
            any way, the terms of service, privacy policy or rules of this
            platform or the recipients. Roomkast reserves the right to
            terminate your access immediately, with or without notice, and
            without liability to you, if Roomkast believes that you have
            violated any of these terms or interfered with the use of the
            platform or service by others."
          />
          <TermsConditions
            title={`8. ${t("Disclaimer.title")}`}
            text="The properties published by users on the platform are not offered
            or provided by Roomkast. Roomkast's services are limited to
            providing the platform to offer and publish such properties and to
            facilitate the creation of rental contracts between owners and
            users. Roomkast is in no way responsible for the properties
            offered by users on the platform. The owners are solely and
            exclusively responsible for the properties they publish through
            the platform and are solely and exclusively responsible for the
            rental contracts created and signed through the platform. Although
            Roomkast may collect rentals from owners and may facilitate the
            platform to perform transactions corresponding to the
            corresponding rental payments to owners. Roomkast is not a party
            to the rental contracts made through the platform. Contracts
            created and signed through the platform are made exclusively
            between users. Users are solely and exclusively responsible for
            the fulfillment of the obligations included in the agreements made
            between users within the platform. Roomkast is not responsible for
            damages to the physical or moral integrity of persons, such as
            injury, death or any other moral damage such as threats, insults
            and slander that may fall on a natural person, as a result of the
            communications established on the platform. Communications and
            relationships established between users as a result of any
            connection within the platform are the sole and exclusive
            responsibility of the users. In the event that one or more users
            or any third party initiates any type of claim or legal action
            against another user or users, each and every user involved in
            such claims or actions exempt Roomkast from any liability.
            Communications and the creation and signing of rental contracts
            between users must be done within the platform. Roomkast is not
            responsible for transactions or agreements made between users
            outside the platform. Communications or agreements made between
            users outside the platform may result in the termination or
            suspension of the account of the users involved. By accessing the
            content available on the website, you accept personal
            responsibility for the results of the use of the information and
            content available on the website. You agree that Roomkast does not
            guarantee the results of actions advised or not advised by
            Roomkast and the content available on the website. Roomkast
            provides resources and content for informational purposes only.
            You acknowledge and agree that your ultimate success or failure to
            use the information and content available on the website will be
            the result of your own efforts, your particular situation and a
            number of other circumstances beyond Roomkast's control."
          />
          <TermsConditions
            title={`9. ${t("Third-party materials.title")}`}
            text="“Third-Party Materials” means any content, images, videos, texts
            or other material that is owned by a third party, such as stock
            images, videos and texts. Such Third-Party Materials are subject
            to the applicable third-party terms and licenses, and may only be
            used as permitted by such terms and licenses."
          />
          <TermsConditions
            title={`10. ${t("CopyRight.title")}`}
            text="All content included on this platform, such as text, graphics,
            logos, images, videos, audio clips, data compilations and
            software, is the property of Roomkast and its user content
            providers and is protected by international copyright laws. The
            compilation of all content on this site is the exclusive property
            of Roomkast and its user content providers and is protected by
            international copyright laws. All software used on this platform
            is the property of Roomkast or its software suppliers and is
            protected by international copyright laws. Users can publish and
            share content through the platform. By posting your content
            through Roomkast, you agree and consent that your content may be
            publicly displayed on the platform and may be shared by other
            users of the platform. By posting and sharing your content and the
            content of other users, you also agree not to modify or remove,
            directly or indirectly, any copyright, trade name, service mark,
            trademark or any other property displayed in the content available
            on Roomkast. Any alteration or use of the content outside the
            guidelines of these terms violates intellectual property rights
            and may be subject to claims or lawsuits. By accessing our
            platform, you do not have any right or title to the content
            available or other intellectual property."
          />
          <TermsConditions
            title={`11. ${t("CopyRight infringement.title")}`}
            text="Roomkast will respond to all inquiries, complaints and claims
            related to alleged infringement or violation of provisions
            contained in Danish and international copyright and intellectual
            property laws and regulations. Roomkast respects the intellectual
            property of others and expects users to do the same. If you
            believe, in good faith, that any material provided on Roomkast's
            platform infringes your copyright or other intellectual property
            rights, please submit your request through our contact
            information, with the following information: • Identification of
            the intellectual property right that is allegedly infringed. All
            relevant registration numbers or a statement regarding ownership
            of the work should be included. • A statement that specifically
            identifies the location of the infringing material, in sufficient
            detail so that Roomkast can find it on the platform. • Your name,
            address, telephone number and email address. • A statement by you
            that you have a good faith belief that the use of the allegedly
            infringing material is not authorized by the copyright owner, or
            its agents, or by law. • A statement by you, made under penalty of
            perjury, that the information in your notification is accurate,
            and that you are the copyright owner or authorized to act on its
            behalf. • An electronic or physical signature of the copyright
            owner or of the person authorized to act on the copyright owner's
            behalf. Upon receipt of a request for copyright infringement,
            Roomkast will contact the allegedly infringing user to enable the
            user to respond to the request. Responses to copyright
            infringement requests must contain the following: • The physical
            or electronic signature of the user. • The identification of the
            content that has been removed or the place where the content was
            posted. • A statement, under oath, indicating a good faith belief
            that the content or material was removed due to an error. • The
            name, address and telephone number of the user. • A statement that
            the user consents to the jurisdiction of the court in which the
            user is located. All copyright infringement requests and responses
            may be submitted through our contact information."
          />
          <TermsConditions
            title={`12. ${t("User content.title")}`}
            text="Some features of the platform may allow users to provide content
            and information. The user retains copyright or any rights they may
            have in the content they provide through the website. Roomkast is
            not responsible for the accuracy, safety or legality of the
            content posted on the platform by users. The user is solely and
            exclusively responsible for its content and the consequences of
            its publication. By providing content and information through the
            platform, the user grants Roomkast a worldwide, non-exclusive,
            royalty-free, fully paid right and license to host, store,
            transfer, display, perform, reproduce and modify the user's
            content for the sole purpose of displaying it through the platform
            and to the general public."
          />
          <TermsConditions
            title={`13. ${t(
              "User content representations and warranties.title"
            )}`}
            text="Roomkast disclaims all liability in connection with user content.
            The user is solely responsible for the content and the
            consequences of providing content through the platform. By
            providing user content through the service, you affirm, represent
            and warrant that: a- You are the creator and owner of the content
            you provide through the platform, or you have the necessary
            licenses, rights, consents and permissions to authorize Roomkast
            to publish and display your content through the platform. b- Your
            user content, and the use of your user content as contemplated by
            these terms, does not and will not: (i) infringe, violate, or
            misappropriate any third party right, including any copyright,
            trademark, patent, trade secret, moral right, privacy right, right
            of publicity, or any other intellectual property or proprietary
            right; (ii) slander, defame, libel, or invade the right of
            privacy, publicity or other property rights of any other person;
            or (iii) cause Roomkast to violate any law or regulation. c- Your
            user content could not be deemed by a reasonable person to be
            objectionable, profane, indecent, pornographic, harassing,
            threatening, embarrassing, hateful, or otherwise inappropriate. d-
            Your user content does not and will not contain hateful content, a
            threat of physical harm, or harassment."
          />
          <TermsConditions
            title={`14. ${t("User content Disclaimer.title")}`}
            text="Roomkast may, at any time and without prior notice, filter,
            remove, edit or block any user content that, in our judgment,
            violates these terms or is otherwise objectionable. If a user or
            content owner notifies us that user content allegedly does not
            conform to these terms, we may investigate the allegation and
            determine in our sole discretion whether to remove the user
            content, which we reserve the right to do at any time and without
            notice. You acknowledge and agree that Roomkast reserves the right
            to, and may from time to time, monitor any and all information
            transmitted or received through the service for operational and
            other purposes. If at any time Roomkast decides to monitor
            content, Roomkast continues to assume no responsibility or
            liability for the content or any loss or damage incurred as a
            result of the use of the content. During monitoring, information
            may be examined, recorded, copied and used in accordance with our
            Privacy Policy."
          />
          <TermsConditions
            title={`15. ${t("Confidentiality of information.title")}`}
            text="The information provided by users through the platform, as well as
            personal data, property information and financial information, is
            confidential and will not be disclosed to unauthorized third
            parties. Roomkast undertakes to maintain the strictest
            confidentiality with respect to the information provided by users
            through the platform, warning, where appropriate, of this duty of
            confidentiality and secrecy to its employees, associates and any
            person who, by virtue of their position or relationship with the
            user must have access to such information. Roomkast may not
            reproduce, modify, make public or disclose to third parties the
            information that users provide through the use of the platform
            without the prior written and express authorization of the user.
            Roomkast undertakes to provide the necessary means to ensure that
            the information is not disclosed or transferred. Roomkast
            undertakes to adopt the same security measures that it would adopt
            with respect to its own confidential information, preventing its
            loss, theft or subtraction. Roomkast undertakes, where
            appropriate, to warn of the existence of the duty of
            confidentiality to its employees, associates, and any person to
            whom it makes the information accessible, being responsible for
            the misuse they may make of confidential information."
          />
          <TermsConditions
            title={`16. ${t("Personal data.title")}`}
            text="Any personal information you post or submit in connection with the
            use of the platform will be used in accordance with our privacy
            policy. Please see our privacy policy."
          />
          <TermsConditions
            title={`17. ${t("Prohibited activities.title")}`}
            text="The content and information available on the platform (including,
              but not limited to, data, information, text, music, sound, photos,
              graphics, video, maps, icons or other material), as well as the
              infrastructure used to provide such content and information, is
              proprietary to Roomkast or licensed to the Roomkast by third
              parties. For all content other than your content, you agree not to
              otherwise modify, copy, distribute, transmit, display, perform,
              reproduce, publish, license, create derivative works from,
              transfer, or sell or re-sell any information, software or services
              obtained from or through the platform. In addition, the following
              activities are prohibited: • Access, monitor, reproduce,
              distribute, transmit, broadcast, display, sell, license, copy or
              otherwise exploit any content of the services, including but not
              limited to, using any robot, spider, scraper or other automated
              means or any manual process for any purpose not in accordance with
              this agreement or without our express written permission. •
              Violate the restrictions in any robot exclusion headers on the
              services or bypass or circumvent other measures employed to
              prevent or limit access to the services. • Take any action that
              imposes, or may impose, in our discretion, an unreasonable or
              disproportionately large load on our infrastructure. • Deep-link
              to any portion of the services for any purpose without our express
              written permission. • 'Frame', 'mirror' or otherwise incorporate
              any part of the services into any other platforms or service
              without our prior written authorization. • Attempt to modify,
              translate, adapt, edit, decompile, disassemble, or reverse
              engineer any software programs used by Roomkast in connection with
              the services. • Circumvent, disable or otherwise interfere with
              security-related features of the services or features that prevent
              or restrict use or copying of any content. • Download any content
              unless it’s expressly made available for download by Roomkast."
          />
          <TermsConditions
            title={`18. ${t("Disclaimer of warranties.title")}`}
            text=" Because of the nature of the Internet Roomkast provides and
            maintains the platform on an 'as is', 'as available' basis and
            makes no promise that use of the platform will be uninterrupted or
            entirely error free. We are not responsible to you if we are
            unable to provide our Internet services for any reason beyond our
            control. Except as provided above we can give no other warranties,
            conditions or other terms, express or implied, statutory or
            otherwise and all such terms are hereby excluded to the maximum
            extent permitted by law. You will be responsible for any breach of
            these terms by you and if you use the platform in breach of these
            terms you will be liable to and will reimburse Roomkast for any
            loss or damage caused as a result. Roomkast will not be liable in
            any amount for failure to perform any obligation under this
            agreement if such failure is caused by the occurrence of any
            unforeseen event beyond its reasonable control including without
            limitation Internet outages, communications outages, fire, flood,
            war or act of God. These terms do not affect your statutory rights
            as a consumer which are available to you. Subject as aforesaid, to
            the maximum extent permitted by law, Roomkast excludes liability
            for any loss or damage of any kind howsoever arising, including
            without limitation any direct, indirect or consequential loss
            whether or not such arises out of any problem you notify to
            Roomkast and Roomkast shall have no liability to pay any money by
            way of compensation, including without limitation all liability in
            relation to: • Any incorrect or inaccurate information on the
            platform. • The infringement by any person of any Intellectual
            property rights of any third party caused by their use of the
            platform. • Any loss or damage resulting from your use or the
            inability to use the platform or resulting from unauthorized
            access to, or alteration of your transmissions or data in
            circumstances which are beyond our control. • Any loss of profit,
            wasted expenditure, corruption or destruction of data or any other
            loss which does not directly result from something we have done
            wrong. • Any amount or kind of loss or damage due to viruses or
            other malicious software that may infect a user's computer
            equipment, software, data or other property caused by persons
            accessing or using content from the platform or from transmissions
            via emails or attachments received from Roomkast. • All
            representations, warranties, conditions and other terms which but
            for this notice would have effect."
          />
          <TermsConditions
            title={`19. ${t("Electronic communications.title")}`}
            text="No responsibility will be accepted by Roomkast for failed, partial
            or garbled computer transmissions, for any computer, telephone,
            cable, network, electronic or internet hardware or software
            malfunctions, failures, connections, availability, for the acts or
            omissions of any user, internet accessibility or availability or
            for traffic congestion or unauthorized human act, including any
            errors or mistakes."
          />
          <TermsConditions
            title={`20. ${t("Indemnification.title")}`}
            text="You agree to defend and indemnify Roomkast from and against any
            claims, causes of action, demands, recoveries, losses, damages,
            fines, penalties or other costs or expenses of any kind or nature
            including but not limited to reasonable legal and accounting fees,
            brought by third parties as a result of: • Your breach of this
            agreement or the documents referenced herein. • Your violation of
            any law or the rights of a third party. • Your use of the
            platform."
          />
          <TermsConditions
            title={`21. ${t("Charges and termination.title")}`}
            text=" We may change the platform and these terms at any time, in our
            sole discretion and without notice to you. You are responsible for
            remaining knowledgeable about these terms. Your continued use of
            the site constitutes your acceptance of any changes to these terms
            and any changes will supersede all previous versions of the terms.
            Unless otherwise specified herein, all changes to these terms
            apply to all users take effect. Furthermore, we may terminate this
            agreement with you under these terms at any time by notifying you
            in writing (including by email) or without any warning."
          />
          <TermsConditions
            title={`22. ${t("Assignment.title")}`}
            text="This agreement and any rights and licenses granted hereunder, may
            not be transferred or assigned by you, but may be assigned by
            Roomkast without restriction."
          />
          <TermsConditions
            title={`23. ${t("Integration clause.title")}`}
            text=" This agreement together with the privacy policy and any other
            legal notices published by Roomkast, shall constitute the entire
            agreement between you and Roomkast concerning and governs your use
            of the platform."
          />
          <TermsConditions
            title={`24. ${t("Dispute.title")}`}
            text="The user agrees that any dispute, claim or controversy arising out
            of or relating to these terms and conditions, or the breach,
            termination, enforcement, interpretation or validity thereof or
            the use of the platform, shall be resolved by binding arbitration
            between the user and Roomkast, provided that each party retains
            the right to bring an individual action in a court of competent
            jurisdiction. In the event a dispute arises in connection with the
            use of the platform or the breach of these terms and conditions,
            the parties agree to submit their dispute to arbitration
            resolution before a reputable arbitration organization as mutually
            agreed by the parties and in accordance with applicable commercial
            arbitration rules. You agree to initiate a formal dispute
            proceeding by sending us a communication through our contact
            information. Roomkast may choose to send you a written offer after
            receiving your initial communication. If we offer and send you a
            settlement offer and you do not accept the offer, or we are unable
            to resolve your dispute satisfactorily and you wish to continue
            with the dispute process, you must initiate the dispute resolution
            process before an accredited arbitration organization and file a
            separate Demand for Arbitration. Any award rendered by the
            arbitration tribunal shall be final and conclusive on the parties.
            To the fullest extent permitted by law, you agree that you will
            not file, join or participate in any class action lawsuit in
            connection with any claim, dispute or controversy that may arise
            in connection with your use of the platform and purchase of
            products posted and offered through the listings available on the
            platform. The courts of Denmark shall have jurisdiction over any
            dispute, controversy or claim relating to Roomkast and its
            business operations. Any such dispute or controversy shall be
            brought and resolved in the courts of Denmark."
          />
          <TermsConditions
            title={`25. ${t("Final provisions.title")}`}
            text=" These terms and conditions are governed by the laws of Denmark and
            the European Union. Use of Roomkast platform is unauthorized in
            any jurisdiction that does not give effect to all provisions of
            these terms and conditions. Our performance of these terms is
            subject to existing laws and legal process, and nothing contained
            in these terms limits our right to comply with law enforcement or
            other governmental or legal requests or requirements relating to
            your use of our platform or information provided to or gathered by
            us with respect to such use. If any part of these terms is found
            to be invalid, illegal or unenforceable, the validity, legality
            and enforceability of the remaining provisions will not in any way
            be affected or impaired. Our failure or delay in enforcing any
            provision of these terms at any time does not waive our right to
            enforce the same or any other provision(s) hereof in the future.
            Any rights not expressly granted herein are reserved."
          />
          <TermsConditions
            title={`26. ${t("Contact information.title")}`}
            text="If you have questions or concerns about these terms, please
            contact us through our contact page or via the contact information
            below: Roomkast ApS. info@roomkast.com"
          />
        </div>
      </div>
      <span className="margin"></span>
      <h1>{t("Privacy policy.title")}</h1>
      <div className="items_wrapper">
        <div>
          <TermsConditions
            title={`1. ${t("General information.title")}`}
            text="The personal data of the users that are collected and processed
            through the platform: • Roomkast App (Android and iOS version -
            Available on Google Play and App Store) • https://roomkast.com
            Will be under responsibility and in charge of: • Roomkast ApS.
            With address in Elbagade 69, 1. th. Copenhagen, Denmark,
            info@roomkast.com. (Hereinafter referred to as “Roomkast”)."
          />
          <TermsConditions
            title={`2. ${t("Types of information gathered.title")}`}
            text="The information we collect from our users and customers helps us
            to deliver our products effectively and to personalize and
            continually improve the user experience on the platform. These are
            the types of information we collect: Information You Give Us. You
            provide information when you search, read and view content through
            the platform, register as a user, publish properties in the
            listings available on the platform, search for and rent
            properties, create and sign lease agreements, use the
            functionalities available on the platform, communicate with other
            users through the platform and/or communicate with us through our
            contact information or our contact forms. As a result of those
            actions, you might supply us with the following information: •
            First and last name • ID/Passport • Email address • Phone number •
            Address • Zip/postal code • Financial Information • Property
            information • Any additional information relating to you that you
            provide to us directly or indirectly through our platform.
            Roomkast will not collect any personally identifiable information
            about you, unless you provide it. Information Collected
            Automatically: By accessing and using the platform you
            automatically provide us with the following information: • The
            device and usage information you use to access the platform • Your
            IP address • Browser and device characteristics • Operating system
            • Referring URLs • Your location • What parts of the platform you
            use and how often Information collected from the device: By using
            the platform through a mobile device, we may request permission to
            use certain features of the device and collect the following
            information: • Mobile device ID • Model and manufacturer •
            Operating system • Version information • IP address • Access to
            notifications • Media access for getting images • Camera access to
            create new image • Access to microphone and video and audio calls
            • File Explorer access to save and upload reports • Location
            access for map and property address Geolocation: We use the
            geolocation function of your device for the sole and exclusive
            purpose of updating the locations of the properties listed within
            the platform. This information is stored to facilitate the correct
            use of the platform and provide specific services based on the
            user's location and properties. This information is used for the
            time necessary to provide the services and is stored in the
            history of each user. The user can request the removal of such
            information but certain functionalities of the platform would not
            be available. Geolocation information collected through the
            platform will be treated in accordance with this privacy policy.
            Payment information: Your credit/debit card details or payment
            information will be processed by the payment processors available
            on the platform, which will process and store your data securely
            and for the sole purpose of processing transactions within the
            platform. Roomkast reserves the right to contract any payment
            platform available on the market, which processes your data for
            the sole purpose of processing transactions within the platform.
            GOOGLE Analytics. We use Google Analytics provided by Google,
            Inc., USA (“Google”). These tool and technologies collect and
            analyze certain types of information, including IP addresses,
            device and software identifiers, referring and exit URLs, feature
            use metrics and statistics, usage and purchase history, media
            access control address (MAC Address), mobile unique device
            identifiers, and other similar information via the use of cookies.
            The information generated by Google Analytics (including your IP
            address) may be transmitted to and stored by Google on servers in
            the United States. We use the GOOGLE Analytics collection of data
            to enhance the platform and improve our service. Please consult
            Google's privacy policy here: •
            https://policies.google.com/privacy Facebook Pixel: Our platform
            uses the Facebook Pixel. Through the Facebook Pixel we can collect
            user information for different purposes. We use the Facebook Pixel
            for the following purposes: • Collect statistics about our
            platform (for example, the number of users who visited a page). •
            Collect information about how you interact with our platform (for
            example, whether you opened or followed links contained in them).
            • Personalize online services and marketing communications. •
            Tailor advertisements to users and optimize advertising campaigns.
            The information collected through the Facebook Pixel will be
            collected and stored by Facebook and will be treated in accordance
            with its privacy policy. The information we collect through the
            Facebook Pixel does not personally identify the user and will
            never be used for purposes other than those contained in this
            privacy policy and Facebook's privacy policy. Please consult
            Facebook's privacy policy here: •
            https://www.facebook.com/privacy/explanation Social Media: On our
            platform you will find links and functions linked to different
            social media, where you can share your information or our content.
            It is advisable to consult the privacy policy and data protection
            of each social media used on our platform. • Facebook:
            https://www.facebook.com/privacy/explanation • Instagram:
            http://instagram.com/about/legal/privacy/ • Twitter:
            https://twitter.com/en/privacy"
          />
          <TermsConditions
            title={`3. ${t("How long we keep your data.title")}`}
            text="Personal data provided by users through the platform will be
            retained for the time necessary to provide the functionalities
            within the platform and until the user retains their account on
            the platform or decides to close it or until Roomkast closes and
            deletes the user's account. Roomkast may retain personal data for
            a longer period where the user has given consent to such
            processing, provided that such consent is not withdrawn. In
            addition, Roomkast may be obliged to retain personal data for a
            longer period if this is necessary for compliance with a legal
            obligation or by order of an authority. Once the retention period
            expires, the personal data will be deleted. Therefore, the right
            of access, the right of erasure, the right of rectification and
            the right to data portability cannot be asserted once the
            retention period has expired."
          />
          <TermsConditions
            title={`4. ${t("How we use your information.title")}`}
            text="In general, we use the information we collect primarily to
            provide, maintain, protect and improve our platform and services.
            We use personal information collected through our platform as
            described below: • Identify you as a user in our system. • Provide
            the platform (available on Google Play and App store). • User
            registration. • Perform the necessary checks. • Publish user
            properties within the platform. • Create and sign lease
            agreements. • Provide the functionalities within the platform. •
            Collection of property rents. • Transferring rental payments to
            landlords. • Facilitate communication between users. • Improve our
            platform and how we operate our business. • Understand and enhance
            your experience using our platform. • Respond to your comments or
            questions through our support team. • Send you related
            information, including confirmations, invoices, technical notices,
            updates, security alerts and support and administrative messages.
            • Communicate with you about upcoming events, offers and news
            about services offered by Roomkast and our selected partners. •
            Marketing purposes of Roomkast. • Link or combine your information
            with other information we get from third parties to help
            understand your needs and provide you with better service. •
            Protect, investigate and deter against fraudulent, unauthorized or
            illegal activity."
          />
          <TermsConditions
            title={`5. ${t("How do you get my consent?.title")}`}
            text=" By registering as a user, publishing properties in the listings
            available on the platform, searching and renting properties,
            creating and signing lease agreements, using the platform's
            functionalities in general, communicating with other users through
            the platform, communicating with us through the contact forms or
            our contact information and providing us with personal information
            to communicate with you, you consent to our collection, storage
            and use of your information on the terms contained in this privacy
            policy. You may withdraw your consent by sending us your request
            via the contact information."
          />
          <TermsConditions
            title={`6. ${t("How we share information.title")}`}
            text="The personal information of our users is an important and
            fundamental part of our business. Under no circumstances will we
            sell or share information with third parties that has not been
            previously authorized by the user or owner of the personal data.
            We share user information solely and exclusively as described
            below. Third-Party Service Providers. We use third party services
            to perform certain functions on our behalf and through our
            platform and services. We use the following third-party services
            on the platform: • Building the platform (Native Android, iOS on
            Swift). • Payment processing • Registration and login • Data
            analysis (Google Analytics) • Creation of ads (Facebook, Google) •
            Marketing services • Providing electronic signatures These
            third-party services and tools may have access to personal
            information needed to perform their functions, but may not use
            that information for other purposes. Information shared with these
            third-party services will be treated and stored in accordance with
            their respective privacy policies and our privacy policy. Business
            Transfers. In the event that Roomkast creates, merges with, or is
            acquired by another entity, your information will most likely be
            transferred. Roomkast will email you or place a prominent notice
            on our platform before your information becomes subject to another
            privacy policy. Protection of Roomkast and others. We release
            personal information when we believe release is appropriate to
            comply with the law, enforce or apply our Terms and conditions and
            other agreements, or protect the rights, property, or safety of
            Roomkast, our users or others. This includes exchanging
            information with other companies and organizations for fraud
            protection and credit risk reduction. With Your Consent. Other
            than as set out above, you will receive notice when personally
            identifiable information about you might go to third parties, and
            you will have an opportunity to choose not to share the
            information. Anonymous Information. Roomkast uses the anonymous
            browsing information collected automatically by our servers
            primarily to help us administer and improve the platform. We may
            also use aggregated anonymous information to provide information
            about the platform to potential business partners and other
            unaffiliated entities. This information is not personally
            identifiable. Email Address. The email address that you supply to
            us for purposes of receiving our email communications will never
            be rented or sold to a third party."
          />
          <TermsConditions
            title={`7. ${t("Protecting your information.title")}`}
            text="We work to protect the security of your information during
          transmission by using Secure Sockets Layer (SSL) software, which
          encrypts information you provide through the website. Content
          and information provided through the platform and the creation
          of events is securely stored in the AWS S3 cloud service. We
          restrict authorized access to your personal information to those
          persons who have a legitimate need to know that information and
          to those persons you have authorized to have access to that
          information. Roomkast follows generally accepted industry
          standards to protect the personal information submitted to us,
          both during transmission and once Roomkast receives it. No
          method of transmission over the Internet, or method of
          electronic storage, is 100% secure. Therefore, while Roomkast
          strives to use commercially acceptable means to protect your
          personal information, we cannot guarantee its absolute security.
          We will not sell, distribute or lease your personal information
          to third parties unless we have your permission or are required
          by law to do so."
          />
          <TermsConditions
            title={`8. ${t("Rights.title")}`}
            text="Users who provide information through our platform, as data
          subjects and data owners, have the right to access, rectify,
          download or delete their information, as well as to restrict and
          object to certain processing of their information. While some of
          these rights apply generally, others apply only in certain
          limited circumstances. We describe these rights below: • Access
          and portability: to access and know what information is stored
          in our servers, you can send us your request through our contact
          information. • Rectify, Restrict, Limit and/or Delete: You can
          also rectify, restrict, limit or delete much of your
          information. • Right to be informed: Users of our platform will
          be informed, upon request, about what data we collect, how it is
          used, how long it is retained and whether it is shared with
          third parties. • Object: When we process your information based
          on our legitimate interests as explained above, or in the public
          interest, you may object to this processing in certain
          circumstances. In such cases, we will stop processing your
          information unless we have compelling legitimate reasons to
          continue processing it or where it is necessary for legal
          reasons. • Revoke consent: Where you have previously given your
          consent, such as to allow us to process and store your personal
          information, you have the right to revoke your consent to the
          processing and storage of your information at any time. For
          example, you may withdraw your consent by updating your
          settings. In certain cases, we may continue to process your
          information after you have withdrawn your consent if we have a
          legal basis for doing so or if your withdrawal of consent was
          limited to certain processing activities. • Complaint: If you
          wish to file a complaint about our use of your information (and
          without prejudice to any other rights you may have), you have
          the right to do so with your local supervisory authority. Users
          can exercise all these rights by contacting us through the
          contact information or the contact page. • Rights related to
          automated decision-making, including profiling: platform users
          may request that we provide a copy of the automated processing
          activities we conduct if they believe that data is being
          unlawfully processed. Users or owners of the personal
          information they provide through the platform may exercise these
          rights over their personal information at any time and without
          any limitation by sending us their request through our contact
          information. Users will be able to modify and update personal
          data through their account settings on the platform."
          />
          <TermsConditions
            title={`9. ${t("Children's online privacy protection.title")}`}
            text="We are in compliance with the requirements of this privacy
          policy has been prepared and is maintained in accordance with
          all applicable national and international laws and regulations
          and, in particular, with the Danish Data Protection Act (DDPA)
          and the General Data Protection Regulation (“GDPR” - European
          regulation), regarding the protection of the personal data of
          minors. Although the platform and services are available to all
          ages, we do not collect any information from children under the
          age of 13 without the respective permission of their parents or
          legal guardians. If you become aware that a child under the age
          of 13 has provided us with personal information without the
          permission of a parent or legal guardian, please contact us. If
          we become aware that a minor has provided us with personal
          information without parental or legal guardian permission, we
          will take steps to delete that information, terminate that
          person's account, and restrict access to that person's account."
          />
          <TermsConditions
            title={`10. ${t("Editing and deleting information.title")}`}
            text="If you believe that any information, we are holding on you is
          incorrect or incomplete, please write to or email us as soon as
          possible. We will promptly correct any information found to be
          incorrect. You can change, modify, correct and delete your
          information at any time, please contact us using the contact
          information. To stop receiving emails from Roomkast, please
          follow the instructions included in the email. Your request
          should be processed within 48 hours."
          />
          <TermsConditions
            title={`11. ${t("Third parties.title")}`}
            text="Except as otherwise expressly included in this privacy policy,
          this document addresses only the use and disclosure of
          information Roomkast collects from you. If you disclose your
          information to others, whether other Roomkast users or vendors,
          different rules may apply to their use or disclosure of the
          information you disclose to them. Roomkast does not control the
          privacy policies of third parties, and you are subject to the
          privacy policies of those third parties where applicable.
          Roomkast is not responsible for the privacy or security
          practices of other platforms, including those that are linked to
          from Roomkast."
          />
          <TermsConditions
            title={`12. ${t("Contact us.title")}`}
            text="If you have any questions or concerns about this privacy policy
          and the processing and security of your data, please contact us
          via our contact page or by using the following contact
          information: Roomkast ApS. info@roomkast.com"
          />
        </div>
      </div>
      <span className="margin"></span>
      <h1>{t("Cookie policy.title")}</h1>
      <div className="items_wrapper">
        <p className="about_roomkast">
          {t(
            "Roomkast is owned and operated by Roomkast ApS. This cookie policy explains how and why cookies and other similar technologies may be stored on and accessed from your device when you use or visit:.title"
          )}
          <br />•{" "}
          {t(
            "https:roomkast.com(Hereinafter referred to as “Roomkast”). The information collected through cookies will be under responsibility and in charge of:.title"
          )}
          <br />•{" "}
          {t(
            "Roomkast ApS. With address in Elbagade 69, 1. th. Copenhagen,Denmark, info@roomkast.com. This cookie policy should be read togetherwith our privacy policy and our terms and conditions.By using thewebsite, you accept the use of cookies by Roomkast, in the termscontained in this policy..title"
          )}
        </p>
        <div>
          <TermsConditions
            title={`1. ${t("What are cookies?.title")}`}
            text="Cookies are small text files that are stored on your computer or
          mobile device when you visit a website. They allow the website to
          recognize your device and remember if you have been to the website
          before. Cookies are a common web technology; most websites use
          cookies and have done so for years. Cookies are widely used to
          make the website work more efficiently. Cookies are used to
          measure which parts of the website users visit and to personalize
          their experience. Cookies also provide information that helps us
          to monitor and improve the performance of the website."
          />
          <TermsConditions
            title={`2. ${t(
              "Refusing or withdrawing consent to the use of cookies.title"
            )}`}
            text="If you do not want cookies to be placed on your device, you can
          adjust your internet browser settings to refuse the setting of all
          or some cookies and to alert you when a cookie is placed on your
          device. For more information on how to do this, please refer to
          the 'help', 'tool' or 'edit' section of your browser. Please note
          that if you use your browser settings to block all Cookies,
          including those that are strictly necessary, you may not be able
          to access or use all or part of the functionality of Roomkast. If
          you wish to delete previously stored cookies, you can delete them
          manually at any time. However, this will not prevent Roomkast from
          placing further Cookies on your device unless and until you adjust
          your Internet browser settings as described above. We provide you
          with links to manage and block cookies depending on the browser
          you use: • Microsoft Edge:
          https://support.microsoft.com/en-us/office/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09?ui=en-us&rs=en-us&ad=us
          • Firefox:
          https://support.mozilla.org/en-US/kb/clear-cookies-and-site-data-firefox
          • Chrome: https://support.google.com/chrome/answer/95647?hl=en •
          Safari:
          https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac"
          />
          <TermsConditions
            title={`3. ${t("First-party cookies.title")}`}
            text=" We use cookies to improve the performance of our website and to
          personalize your online experience at Roomkast. Cookies help us
          collect information about how users use our website and which
          pages they visit. They allow us to monitor the number of visitors
          and analyze website usage patterns and trends. We collect this
          information anonymously, so it does not identify anyone as an
          individual and no personal information is stored in our cookies.
          We always use cookie data responsibly."
          />
          <TermsConditions
            title={`4. ${t("Third-party cookies.title")}`}
            text="Third-party cookies may come from partners or third-party
          companies that provide functional web services or tools for our
          website and the optimal functioning and operation of our services.
          We use third party cookies responsibly and for the sole purpose of
          providing optimal operation of the platform and services. You can
          opt out of these cookies by following the information on cookie
          deletion contained in this document or in the technical
          information of the browser from which you access our website and
          services."
          />
          <TermsConditions
            title={`5. ${t("Social cookies.title")}`}
            text="These cookies allow you to share our website and click 'Like' on
          social networks such as Instagram, Facebook, Google, etc. They
          also allow you to interact with content on each platform. The way
          these cookies are used and the information collected is governed
          by the privacy policy of each social platform."
          />
          <TermsConditions
            title={`6. ${t("Cookies we use.title")}`}
            text="<div>
          <p  style='font-weight:bold; margin-bottom:10px'>We use the following cookies on our website:</p>
          <p>
          <table style='width: 100%';>
            <tr>
              <th>Cookies</th>
              <th>Domaine</th>
              <th>Type</th>
              <th>Description</th>
              <th>Duration</th>
            </tr>
            <tr>
              <th style='height:200px'>PHPSESSI</br> D</th>
              <th>roomkast.com</th>
              <th>necessary</th>
              <th>This cookies is native to PHP</br> applications. The cookie is</br> used to store and identify a</br> users' unique session ID for</br> the purpose of managing</br>user session on the website.</br>The cookie is a session</br>cookie and is deleted when</br>all the browser windows are</br> close</th>
              <th>Cession</th>
            </tr>
          </table>
        </p>
        </div>
        "
          />
          <TermsConditions
            title={`7. ${t("Purpose of our cookies.title")}`}
            text="Our cookies are used for the following purposes: Strictly
          necessary: These cookies are essential for Roomkast to perform
          its basic functions. Security: We use these cookies to help
          identify and prevent potential security risks. Analytics and
          performance: Performance cookies collect information about how
          users interact with our website, including the most visited
          pages, as well as other analytical data. We use this data to
          improve how our website works and to understand how users
          interact with it. Advertising: These cookies are used to show
          relevant advertising to visitors who use our services or visit
          the website we host or provide, and to understand and report
          on the effectiveness of advertisements served on our website.
          They track details such as the number of unique visitors, the
          number of times certain advertisements have been shown and the
          number of clicks the advertisements have received. They are
          also used to create user profiles, including showing you
          adverts based on the products you have viewed on our website.
          These are set up by Roomkast and trusted third party networks
          and are generally persistent in nature. GOOGLE Analytics. We
          use Google Analytics provided by Google, Inc. of the United
          States ('Google'). These tools and technologies collect and
          analyze certain types of information, such as IP addresses,
          device and software identifiers, referring and exit URLs,
          feature usage metrics and statistics, usage and purchase
          history, media access control address (MAC address), unique
          mobile device identifiers, and other similar information
          through the use of cookies. The information generated by
          Google Analytics (including your IP address) may be
          transmitted to and stored by Google on servers in the United
          States. We use GOOGLE Analytics data collection to improve the
          website and platform and improve our service."
          />
          <TermsConditions
            title={`8. ${t("Contact us.title")}`}
            text="If you have any questions or concerns about this cookie policy
          and the processing and security of your data, please contact
          us via our contact page or via the contact information below:
          Roomkast ApS. (info@roomkast.com)"
          />
        </div>
      </div>
    </div>
  );
};

export default Collapse;
